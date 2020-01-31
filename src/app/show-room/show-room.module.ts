import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRoomRoutingModule } from './show-room-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { AsideComponent } from './components/aside/aside.component';
import { ShowItemsComponent } from './components/show-items/show-items.component';
import { ComplexComponent } from './components/complex/complex.component';
import { ComplexasideComponent } from './components/complexaside/complexaside.component';

@NgModule({
  declarations: [MainComponent, PagebComponent, AsideComponent, ShowItemsComponent, ComplexComponent, ComplexasideComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShowRoomRoutingModule
  ]
})
export class ShowRoomModule { }
