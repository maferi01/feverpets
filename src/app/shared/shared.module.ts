import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ListKeyValuesComponent } from './components/list-key-values/list-key-values.component';
/**
 * Shared modules contains the common components such as durectives, pipes, comps..
 */
@NgModule({
  declarations: [ OrderByPipe, ListKeyValuesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OrderByPipe,
    ListKeyValuesComponent
  ]
})
export class SharedModule { }
