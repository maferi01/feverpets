import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutRouterComponent } from './components/layout-router/layout-router.component';
import { HeaderComponent } from './components/header/header.component';
/**
 * Root module for this app, It lives always, and loads persistent modules and main component 
 */
@NgModule({
  declarations: [AppComponent, LayoutRouterComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [AppComponent]
})
export class RootModule { }
