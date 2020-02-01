import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RootModule } from './root/root.module';
import { ServicesModule } from './services/services.module';
import { AppComponent } from './root/app.component';
import { HttpClientModule } from '@angular/common/http';
/**
 * Module base of this app, It begins the structure feature module
 */
@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RootModule,
    HttpClientModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
