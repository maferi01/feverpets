import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { AsideComponent } from './components/aside/aside.component';
import { LayoutRouterInsideComponent } from '../shared/components/layout-router-inside/layout-router-inside.component';
import { ShowItemsComponent } from './components/show-items/show-items.component';
import { ComplexComponent } from './components/complex/complex.component';
import { ComplexasideComponent } from './components/complexaside/complexaside.component';

const routes: Routes = [
  {
    path: 'pagea',
    component: LayoutRouterInsideComponent,
    children: [
      {path: '', component: PagebComponent, outlet: 'main'}
    ]

  },
  {
    path: 'pageb',
    component: LayoutRouterInsideComponent,
    children: [
      {path: '', component: PagebComponent, outlet: 'main'},
      {path: '', component: AsideComponent, outlet: 'asideleft'},
      {path: '', component: AsideComponent, outlet: 'asideright'}
    ]
  },
  {
    path: 'pagec',
    component: LayoutRouterInsideComponent,
    children: [
      {path: '', component: PagebComponent, outlet: 'main'},
      {path: '', component: AsideComponent, outlet: 'asideright'}
    ]
  },
  {
    path: 'paged',
    component: LayoutRouterInsideComponent,
    children: [
      {path: '', component: MainComponent, outlet: 'main'},
    ]
  },
  {
    path: 'items',
    component: LayoutRouterInsideComponent,
    children: [
      {path: '', component: ShowItemsComponent, outlet: 'main'},
    ]
  },
  {
    path: 'complex',
    component: LayoutRouterInsideComponent,
    children: [
      {path: '', component: ComplexComponent, outlet: 'main'},
      {path: '', component: ComplexasideComponent, outlet: 'asideright'}
    ]
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ShowRoomRoutingModule { }
