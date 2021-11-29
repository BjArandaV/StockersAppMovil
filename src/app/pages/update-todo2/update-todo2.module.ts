import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTodo2PageRoutingModule } from './update-todo2-routing.module';

import { UpdateTodo2Page } from './update-todo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTodo2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateTodo2Page]
})
export class UpdateTodo2PageModule {}
