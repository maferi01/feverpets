import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LayoutRouterInsideComponent } from '../shared/components/layout-router-inside/layout-router-inside.component';

const routes: Routes = [
  {
    path: 'paged',
    component: LayoutRouterInsideComponent,
    children: [
      {path: '', component: MainComponent, outlet: 'main'},
    ]
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ShowRoomRoutingModule { }
