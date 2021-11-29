import { Component, OnInit } from '@angular/core';

import { CrudService2 } from './../../services/crud.service2';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-update-todo2',
  templateUrl: './update-todo2.page.html',
  styleUrls: ['./update-todo2.page.scss'],
})

export class UpdateTodo2Page implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private crudService: CrudService2,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        nombrec: [data['nombrec']],
        cantidad: [data['cantidad']],
        f_ingreso: [data['f_ingreso']],
        estado: [data['estado']]
      })
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nombrec: [''],
      cantidad: [''],
      f_ingreso: [''],
      estado: ['']
    })    
  }

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value)
  }

}
