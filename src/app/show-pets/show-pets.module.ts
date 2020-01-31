import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShowPetsRoutingModule } from './show-pets-routing.module';
import { ListpetsComponent } from './components/listpets/listpets.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';
import { PetsDataService } from './services/pets-data.service';



@NgModule({
  declarations: [ListpetsComponent, DetailPetComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShowPetsRoutingModule
  ],
  providers: [PetsDataService]
})
export class ShowPetsModule { }
