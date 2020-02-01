import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowRoomModule } from '../show-room/show-room.module';
import { ShowPetsModule } from '../show-pets/show-pets.module';
/**
 * Router module and configuration with lazy loading load
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/pets' ,
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: () => ShowPetsModule
  },
   {
     path: 'show-room',
     loadChildren: () => ShowRoomModule
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
