import { Component } from '@angular/core';
import { Observable, Subject, scan, startWith } from 'rxjs';

type CounterAction = 'increment' | 'decrement' | 'reset';

@Component({
  selector: 'app-rxjs-counter',
  templateUrl: './rxjs-counter.component.html',
  styleUrls: ['./rxjs-counter.component.css']
})
export class RxjsCounterComponent {

  private readonly counterAction$ = new Subject<CounterAction>();

  readonly count$: Observable<number> = this.counterAction$.pipe(
    startWith('reset' as CounterAction),
    scan((count, action) => {
      if (action === 'increment') {
        return count + 1;
      }

      if (action === 'decrement') {
        return count - 1;
      }

      return 0;
    }, 0)
  );

  increment() {
    this.counterAction$.next('increment');
  }

  decrement() {
    this.counterAction$.next('decrement');
  }

  reset() {
    this.counterAction$.next('reset');
  }
}
