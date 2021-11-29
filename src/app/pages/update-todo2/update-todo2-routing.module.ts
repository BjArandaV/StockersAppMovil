import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTodo2Page } from './update-todo2.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTodo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTodo2PageRoutingModule {}
