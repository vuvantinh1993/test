import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HopDongComponent } from './hop-dong/hop-dong.component';
import { TaiLieuComponent } from './tai-lieu/tai-lieu.component';


@NgModule({
  declarations: [
    AppComponent,
    HopDongComponent,
    TaiLieuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
