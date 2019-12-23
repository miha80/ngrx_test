import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as fromReducer from 'src/app/my/reducers';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DummyComponent implements OnInit {

  @Input() data: fromReducer.State;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
