import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RootModule } from './root/root.module';
import { ServicesModule } from './services/services.module';
import { AppComponent } from './root/app.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RootModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
