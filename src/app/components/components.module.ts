import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ HeaderComponent],
  exports: [ HeaderComponent],
  imports: [RouterModule, CommonModule, IonicModule],
  providers:[]
})
export class ComponentsModule {}
