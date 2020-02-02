import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from './error.service';
/**
 * Services module, contains the common services ,
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ErrorService
    //set here common services
  ]
})
export class ServicesModule { }
