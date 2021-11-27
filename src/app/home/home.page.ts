import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CrudService } from './../services/crud.service';
//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // declaciones
  id:string;
  doc: any;
  ingreso: {id: string; nombrec: string; cantidad: string; f_ingreso: string;estadoc: string;} [];
  insertar: { estado: string;}[];


  constructor(
    //iniciar firestore
    private firestore: AngularFirestore,
    private crudService: CrudService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(){

  this.firestore.collection('/ingreso/', ref => ref.where ('estado', '==', "Vigente")).snapshotChanges().subscribe(res=>{
  if(res){
  this.ingreso = res.map(e=>{
    return {
      // recuperar datos
    nombrec: e.payload.doc.data()['nombrec'],
    cantidad: e.payload.doc.data()['cantidad'],
    f_ingreso: e.payload.doc.data()['f_ingreso'],

    estadoc: e.payload.doc.data()['estado'],
    //
    id: e.payload.doc.id
    }  
  })
  }
  })
}
async logOut(): Promise<void> {
  await this.authService.logout();
  this.router.navigateByUrl('login');
}

cambiarestado(id,estado=null){
  estado="vencido";

  let insertar = {}

 insertar['estado'] = estado
 
 this.firestore.doc('/ingreso/'+this.id).update(insertar).then(() =>{
 })
}

remove(id) {
  console.log(id)
  if (window.confirm('¿Estas seguro que deseas eliminar este item?')) {
    this.crudService.delete(id)
  }
} 

}
