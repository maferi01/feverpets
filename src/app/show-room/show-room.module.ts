import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRoomRoutingModule } from './show-room-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShowRoomRoutingModule
  ]
})
export class ShowRoomModule { }
