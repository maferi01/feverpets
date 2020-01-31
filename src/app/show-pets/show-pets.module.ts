import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShowPetsRoutingModule } from './show-pets-routing.module';
import { ListpetsComponent } from './components/listpets/listpets.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';



@NgModule({
  declarations: [ListpetsComponent, DetailPetComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShowPetsRoutingModule
  ]
})
export class ShowPetsModule { }
