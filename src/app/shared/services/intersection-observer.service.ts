import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  elementObservers = [];
  intersectionSubs = [];

  addSubscription(subscription): number {
    this.intersectionSubs.push(subscription);
    return this.intersectionSubs.length - 1;
  }
  fromIntersectionObserver$(
    element: HTMLElement,
    config: IntersectionObserverInit,
    stopWhenVisible = false
  ) {
    return new Observable<IntersectionObserverEntry>((subscriber) => {
      const intersectionObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            subscriber.next(entry);
            if (stopWhenVisible && entry.isIntersecting) {
              observer.unobserve(entry.target);
            }
          });
        },
        config
      );
      this.elementObservers.push({ element, observer: intersectionObserver });

      intersectionObserver.observe(element);

      return {
        unsubscribe() {
          intersectionObserver.disconnect();
        },
      };
    });
  }

  fromIntersectionObserverShare$(
    element: HTMLElement,
    config: IntersectionObserverInit,
    stopWhenVisible = false
  ) {
    return this.fromIntersectionObserver$(
      element,
      config,
      stopWhenVisible
    ).pipe(share());
  }
}
