import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShowPetsRoutingModule } from './show-pets-routing.module';
import { ListpetsComponent } from './components/listpets/listpets.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';
import { PetsDataService } from './services/pets-data.service';
import { ListPetsPresentationComponent } from './components/list-pets-presentation/list-pets-presentation.component';
/**
 * Pets module contains all the pages and features of this functional logic.
 */

@NgModule({
  declarations: [ListpetsComponent, DetailPetComponent, 
    ListPetsPresentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShowPetsRoutingModule
  ],
  providers: [PetsDataService]
})
export class ShowPetsModule { }
