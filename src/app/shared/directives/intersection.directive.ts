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
  selector: '[jwIntersection]',
})
export class IntersectionDirective implements OnInit, OnDestroy {
  @Input() private intersectionRootMargin = '0px';
  @Input() private intersectionThreshold: number | number[] = 0;
  @Input() private stopWhenVisible = false;
  @Input() private throttleTime = 0;

  @Output() public visibilityChange = new EventEmitter<boolean>();

  private directiveSubs: Subscription[] = [];

  constructor(
    private intersectionObService: IntersectionObserverService,
    private elRef: ElementRef,
  ) {}

  public ngOnInit(): void {
    const parentSub = this.findSubByParamsComparizon();

    if (parentSub) {
      this.addElementToExistingSub(this.elRef.nativeElement, parentSub);
    } else {
      this.addNewSub(this.elRef.nativeElement);
    }
  }

  private addElementToExistingSub(element: HTMLElement, parentSub): void {
    const elementObserver = this.findElementObserverFromParent(parentSub);

    this.addElementToObserver(element, elementObserver);
    this.addElementToParentElements(element, parentSub);

    this.addObserverToArray(element, elementObserver);

    this.addSubscription(element, parentSub);
  }

  private findElementObserverFromParent(parentSub): any {
    return this.intersectionObService.elementObservers.find(
      (o) => (o.element = parentSub.elements[0]),
    );
  }

  private addElementToObserver(element: HTMLElement, elementObserver): void {
    elementObserver.observer.observe(element);
  }

  private addElementToParentElements(element: HTMLElement, parentSub): void {
    parentSub.elements.push(element);
  }

  private addObserverToArray(element: HTMLElement, elementObserver): void {
    this.intersectionObService.elementObservers.push({
      element,
      observer: elementObserver.observer,
    });
  }

  private addSubscription(element: HTMLElement, parentSub): void {
    this.directiveSubs.push(
      this.listenToIntersections(parentSub.observable$, element),
    );
  }

  private addNewSub(element: HTMLElement): void {
    const config = {
      rootMargin: this.intersectionRootMargin,
      threshold: this.intersectionThreshold,
    };

    const observable$ = this.intersectionObService.fromIntersectionObserverShare$(
      element,
      config,
      this.stopWhenVisible,
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
    element: HTMLElement,
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
        tap((isIntersecting) => this.visibilityChange.emit(isIntersecting)),
      )
      .subscribe();
  }

  private findSubByParamsComparizon(): any {
    return this.intersectionObService.intersectionSubs.find(
      (s) =>
        s.intersectionRootMargin === this.intersectionRootMargin &&
        ((!s.intersectionThreshold && !this.intersectionThreshold) ||
          s.intersectionThreshold === this.intersectionThreshold) &&
        s.stopWhenVisible === this.stopWhenVisible,
    );
  }

  public ngOnDestroy(): void {
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

  private unsubIntersectionSub(intersectionSub): void {
    intersectionSub.subscription.unsubscribe();
  }

  private unsubDirectiveSubs(): void {
    this.directiveSubs.forEach((sub) => sub.unsubscribe());
  }

  private removeElementFromSub(el: HTMLElement, intersectionSub): void {
    intersectionSub.elements = intersectionSub.elements.filter(
      (e: HTMLElement) => e !== el,
    );
  }

  private unobserveThisElement(el: HTMLElement): void {
    this.intersectionObService.elementObservers
      .find((o) => o.element === el)
      .observer.unobserve(el);
  }

  private removeIntersectionSub(intersectionSub): void {
    this.intersectionObService.intersectionSubs = this.intersectionObService.intersectionSubs.filter(
      (s) => s !== intersectionSub,
    );
  }

  private removeElementObserver(el: HTMLElement): void {
    this.intersectionObService.elementObservers = this.intersectionObService.elementObservers.filter(
      (s) => s.element !== el,
    );
  }
}
