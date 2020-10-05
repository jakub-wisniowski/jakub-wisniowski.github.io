import {
  Directive,
  OnDestroy,
  OnInit,
  Input,
  Output,
  ElementRef,
  EventEmitter,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IntersectionObserverService } from '../services/intersection-observer.service';
import {
  filter,
  throttleTime,
  map,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

@Directive({
  selector: '[intersection]',
})
export class IntersectionDirective implements OnInit, OnDestroy {
  @Input() intersectionRootMargin = '0px';
  @Input() intersectionThreshold: number | number[] = 0;
  @Input() stopWhenVisible = false;
  @Input() throttleTime = 0;

  @Output() visibilityChange = new EventEmitter<boolean>();

  directiveSubs: Subscription[] = [];

  constructor(
    private intersectionObService: IntersectionObserverService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    const parentSub = this.findSub();

    if (parentSub) {
      this.addElementToExistingSub(this.elRef.nativeElement, parentSub);
    } else {
      this.addNewSub(this.elRef.nativeElement);
    }
  }

  ngOnDestroy() {
    const intersectionSub = this.findSub();
    intersectionSub.subscription.unsubscribe();

    this.directiveSubs.forEach((sub) => sub.unsubscribe());
    const el = this.elRef.nativeElement;

    if (intersectionSub.elements.length > 1) {
      this.intersectionObService.elementObservers
        .find((o) => o.element === el)
        .observer.unobserve(el);
      this.intersectionObService.elementObservers = this.intersectionObService.elementObservers.filter(
        (s) => s.element !== el
      );
      intersectionSub.elements = intersectionSub.elements.filter(
        (e) => e !== el
      );
    } else {
      this.intersectionObService.intersectionSubs = this.intersectionObService.intersectionSubs.filter(
        (s) => s !== intersectionSub
      );
      this.intersectionObService.elementObservers = this.intersectionObService.elementObservers.filter(
        (s) => s.element !== el
      );
    }
  }

  private addElementToExistingSub(element: HTMLElement, parentSub) {
    // finds elementObserver connected to parent intersectionSub
    const elementObserver = this.intersectionObService.elementObservers.find(
      (o) => (o.element = parentSub.elements[0])
    );
    // makes the same observer watch new element
    elementObserver.observer.observe(element);
    parentSub.elements.push(element);

    // adds new element observer to array
    this.intersectionObService.elementObservers.push({
      element,
      observer: elementObserver.observer,
    });
    this.directiveSubs.push(this.subscribe(parentSub.observable$, element));
  }

  private addNewSub(element: HTMLElement) {
    const config = {
      rootMargin: this.intersectionRootMargin,
      threshold: this.intersectionThreshold,
    };

    const observable$ = this.intersectionObService.fromIntersectionObserverShare$(
      element,
      config,
      this.stopWhenVisible
    );

    const subscription = this.subscribe(observable$, element);

    const newSub = {
      subscription,
      observable$,
      elements: [element],
      intersectionRootMargin: this.intersectionRootMargin,
      intersectionTreshold: this.intersectionThreshold,
      stopWhenVisible: this.stopWhenVisible,
    };

    this.intersectionObService.addSubscription(newSub);
  }

  // emits visibilityChange event if intersection detected for selected element
  private subscribe(
    observable$: Observable<IntersectionObserverEntry>,
    element: HTMLElement
  ): Subscription {
    return observable$
      .pipe(
        filter((entry) => entry.target === element),
        throttleTime(this.throttleTime, undefined, {
          leading: true,
          trailing: true,
        }),
        map((entry) => entry.isIntersecting),
        distinctUntilChanged(),
        tap((isIntersecting) => this.visibilityChange.emit(isIntersecting))
      )
      .subscribe();
  }

  // finds subscription by comparing all params
  private findSub() {
    return this.intersectionObService.intersectionSubs.find(
      (s) =>
        s.intersectionRootMargin === this.intersectionRootMargin &&
        ((!s.intersectionThreshold && !this.intersectionThreshold) ||
          s.intersectionThreshold === this.intersectionThreshold) &&
        s.stopWhenVisible === this.stopWhenVisible
    );
  }
}
