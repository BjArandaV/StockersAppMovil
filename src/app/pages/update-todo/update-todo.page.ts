import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})

export class UpdateTodoPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        nombrec: [data['nombrec']],
        cantidad: [data['cantidad']],
        f_inicio: [data['f_inicio']],
        f_final: [data['f_final']],
        estado: [data['estado']]
      })
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nombrec: [''],
      cantidad: [''],
      f_inicio: [''],
      f_final: [''],
      estado: ['']
    })    
  }

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value)
  }

}
