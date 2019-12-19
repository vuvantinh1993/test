import { ReactiveFormsModule } from '@angular/forms';
import { TaiLieuDataComponent } from './tai-lieu-data/tai-lieu-data.component';
import { TaiLieuComponent } from './tai-lieu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TaiLieuComponent, TaiLieuDataComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TaiLieuModule { }
