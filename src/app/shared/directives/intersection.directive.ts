import {
  Directive,
  OnDestroy,
  OnInit,
  Input,
  Output,
  ElementRef,
  EventEmitter,
} from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
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
    const parentSub = this.findSubByParamsComparizon();

    if (parentSub) {
      this.addElementToExistingSub(this.elRef.nativeElement, parentSub);
    } else {
      this.addNewSub(this.elRef.nativeElement);
    }
  }

  private addElementToExistingSub(element: HTMLElement, parentSub) {
    const elementObserver = this.findElementObserverFromParent(parentSub);

    this.addElementToObserver(element, elementObserver);
    this.addElementToParentElements(element, parentSub);

    this.addObserverToArray(element, elementObserver);

    this.addSubscription(element, parentSub);
  }

  private findElementObserverFromParent(parentSub) {
    return this.intersectionObService.elementObservers.find(
      (o) => (o.element = parentSub.elements[0])
    );
  }

  private addElementToObserver(element: HTMLElement, elementObserver) {
    elementObserver.observer.observe(element);
  }

  private addElementToParentElements(element: HTMLElement, parentSub) {
    parentSub.elements.push(element);
  }

  private addObserverToArray(element: HTMLElement, elementObserver) {
    this.intersectionObService.elementObservers.push({
      element,
      observer: elementObserver.observer,
    });
  }

  private addSubscription(element: HTMLElement, parentSub) {
    this.directiveSubs.push(
      this.listenToIntersections(parentSub.observable$, element)
    );
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

    const subscription = this.listenToIntersections(observable$, element);

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

  private listenToIntersections(
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

  private findSubByParamsComparizon() {
    return this.intersectionObService.intersectionSubs.find(
      (s) =>
        s.intersectionRootMargin === this.intersectionRootMargin &&
        ((!s.intersectionThreshold && !this.intersectionThreshold) ||
          s.intersectionThreshold === this.intersectionThreshold) &&
        s.stopWhenVisible === this.stopWhenVisible
    );
  }

  ngOnDestroy() {
    const intersectionSub = this.findSubByParamsComparizon();
    this.unsubIntersectionSub(intersectionSub);
    this.unsubDirectiveSubs();

    const el = this.elRef.nativeElement;

    if (intersectionSub.elements.length > 1) {
      this.removeElementFromSub(el, intersectionSub);
      this.unobserveThisElement(el);
      this.removeElementObserver(el);
    } else {
      this.removeIntersectionSub(intersectionSub);
      this.removeElementObserver(el);
    }
  }

  private unsubIntersectionSub(intersectionSub) {
    intersectionSub.subscription.unsubscribe();
  }

  private unsubDirectiveSubs() {
    this.directiveSubs.forEach((sub) => sub.unsubscribe());
  }

  private removeElementFromSub(el: HTMLElement, intersectionSub) {
    intersectionSub.elements = intersectionSub.elements.filter(
      (e: HTMLElement) => e !== el
    );
  }

  private unobserveThisElement(el: HTMLElement) {
    this.intersectionObService.elementObservers
      .find((o) => o.element === el)
      .observer.unobserve(el);
  }

  private removeIntersectionSub(intersectionSub) {
    this.intersectionObService.intersectionSubs = this.intersectionObService.intersectionSubs.filter(
      (s) => s !== intersectionSub
    );
  }

  private removeElementObserver(el: HTMLElement) {
    this.intersectionObService.elementObservers = this.intersectionObService.elementObservers.filter(
      (s) => s.element !== el
    );
  }
}
