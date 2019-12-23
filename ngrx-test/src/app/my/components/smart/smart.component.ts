import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from 'src/app/my/reducers';
import * as fromSelector from 'src/app/my/selectors';
import * as fromAction from 'src/app/my/actions/number.actions';
import { Observable, Subject, empty, observable, interval, animationFrameScheduler } from 'rxjs';
import { switchMap, takeUntil, tap, observeOn } from 'rxjs/operators';

enum EBtns {
  start = 'start',
  stop = 'stop',
}

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit, OnDestroy {

  public dummyData$: Observable<fromReducer.NumbersState>
  public btnSubj: Subject<EBtns>;
  public btn$: Observable<number>;
  private componentDestroyed: Subject<boolean>;

  constructor(private _store: Store<fromReducer.State>) {
    this.componentDestroyed = new Subject();
    this.btnSubj = new Subject();
  }

  startBtnClick() {
    this.btnSubj.next(EBtns.start);
  }

  stopBtnClick() {
    this.btnSubj.next(EBtns.stop);
  }

  ngOnInit() {
    this.dummyData$ = this._store.select(fromSelector.selectNumberState).pipe(
      observeOn(animationFrameScheduler),
    );
    this.btn$ = this.btnSubj.pipe(
      switchMap((subjSignal) => {
        let result: Observable<number> = empty();
        if (subjSignal === EBtns.start) {
          result = interval(500);
        }
        return result;
      }),
      tap(() => this._store.dispatch(fromAction.change()))
    );

    this.btn$.pipe(
                takeUntil(this.componentDestroyed),
              )
              .subscribe(() => {
                this._store.dispatch(fromAction.increase());
                this._store.dispatch(fromAction.decrease());
                this._store.dispatch(fromAction.decrease());
              });

  }

  ngOnDestroy() {
    this.componentDestroyed.next(true);
  }

}
