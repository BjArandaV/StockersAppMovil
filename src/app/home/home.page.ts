import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CrudService } from './../services/crud.service';
//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // declaciones
  id: string;
  doc: any;
  
  //base
  ingreso: {id: string; nombrec: string; cantidad: string; f_inicio: string; f_final: string; estadoc: string;} [];
  insertar: { estado: string;}[];


  constructor(
    //iniciar firestore
    private firestore: AngularFirestore,
    private crudService: CrudService
  ) {}

  ngOnInit(){
  this.firestore.collection('/ingreso/', ref => ref.where ('estado', '==', "Vigente")).snapshotChanges().subscribe(res=>{
  if(res){
  this.ingreso = res.map(e=>{
    return {
      // recuperar datos
    nombrec: e.payload.doc.data()['nombrec'],
    cantidad: e.payload.doc.data()['cantidad'],
    f_inicio: e.payload.doc.data()['f_inicio'],
    f_final: e.payload.doc.data()['f_final'],
    estadoc: e.payload.doc.data()['estado'],
    //
    id: e.payload.doc.id
    }  
  })
  }
  })
}

cambiarestado(id,estado=null){
  estado="vencido";

  this.id = id;
  let insertar = {}

 insertar['estado'] = estado
 
 this.firestore.doc('/ingreso/'+this.id).update(insertar).then(() =>{
 })
}

remove(id) {
  console.log(id)
  if (window.confirm('Estas seguro?')) {
    this.crudService.delete(id)
  }
} 

}
