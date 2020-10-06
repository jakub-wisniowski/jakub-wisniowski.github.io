import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  public elementObservers = [];
  public intersectionSubs = [];

  public addSubscription(subscription): number {
    this.intersectionSubs.push(subscription);
    return this.intersectionSubs.length - 1;
  }

  private fromIntersectionObserver$(
    element: HTMLElement,
    config: IntersectionObserverInit,
    stopWhenVisible = false,
  ): Observable<IntersectionObserverEntry> {
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
        config,
      );
      this.elementObservers.push({ element, observer: intersectionObserver });

      intersectionObserver.observe(element);

      return {
        unsubscribe(): void {
          intersectionObserver.disconnect();
        },
      };
    });
  }

  public fromIntersectionObserverShare$ = (
    element: HTMLElement,
    config: IntersectionObserverInit,
    stopWhenVisible = false,
  ) =>
    this.fromIntersectionObserver$(element, config, stopWhenVisible).pipe(
      share(),
    )
}
