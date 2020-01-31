import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRouterInsideComponent } from './components/layout-router-inside/layout-router-inside.component';
import { RouterModule } from '@angular/router';
//import { PresentCompsModule, compsPresent } from 'present-comps';

@NgModule({
  declarations: [LayoutRouterInsideComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    
  ]
})
export class SharedModule { }
