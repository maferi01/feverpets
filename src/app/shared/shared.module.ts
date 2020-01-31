import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRouterInsideComponent } from './components/layout-router-inside/layout-router-inside.component';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from './pipes/order-by.pipe';
//import { PresentCompsModule, compsPresent } from 'present-comps';

@NgModule({
  declarations: [LayoutRouterInsideComponent, OrderByPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OrderByPipe
  ]
})
export class SharedModule { }
