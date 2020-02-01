import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRouterInsideComponent } from './components/layout-router-inside/layout-router-inside.component';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ListKeyValuesComponent } from './components/list-key-values/list-key-values.component';

@NgModule({
  declarations: [LayoutRouterInsideComponent, OrderByPipe, ListKeyValuesComponent],
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
