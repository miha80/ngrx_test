import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNumberReducer from './reducers';
import { SmartComponent } from './components/smart/smart.component';
import { DummyComponent } from './components/dummy/dummy.component';

@NgModule({
  declarations: [SmartComponent, DummyComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNumberReducer.myFeatureKey, fromNumberReducer.reducers),
  ]
})
export class MyModule { }
