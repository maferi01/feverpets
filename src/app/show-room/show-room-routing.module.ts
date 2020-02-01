import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'paged',
  //   component: LayoutRouterInsideComponent,
  //   children: [
  //     {path: '', component: MainComponent, outlet: 'main'},
  //   ]
  // }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ShowRoomRoutingModule { }
