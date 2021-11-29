import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// formulario y rectivos
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// formulario y rectivos


import { IonicModule } from '@ionic/angular';

import { Camp2Page } from './camp2.page';

const routes: Routes = [
  {
    path: '',
    component: Camp2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Camp2Page]
})
export class Camp2PageModule {}
