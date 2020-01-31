import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListpetsComponent } from './components/listpets/listpets.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';
const routes: Routes = [
  {
    path: '',
    component: ListpetsComponent},
  {
    path: 'detail',
    component: DetailPetComponent
  },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ShowPetsRoutingModule { }
