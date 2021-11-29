import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


// control formulario
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-camp2',
  templateUrl: './camp2.page.html',
  styleUrls: ['./camp2.page.scss'],
})

export class Camp2Page implements OnInit {
  id:string;
  doc: any;
  insertar:{nombrec: string ; cantidad: string ; f_ingreso: string ;estado: string; };
  
  
  constructor(
    private firestore: AngularFirestore ,
     public formBuilder: FormBuilder,
     
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
   this.insertar = {nombrec : '' ,cantidad : '', f_ingreso: '', estado : ''}  
   this.id = this.route.snapshot.paramMap.get('id');
  }
  
  cambiofecha(event)
  {
    console.log('ionChange',event);
    console.log('Date', new Date(event.detail.value))
  }
 
  guardar(nombrec, cantidad, f_ingreso,estado=null){
  estado="Vigente"; 
  
  let insertar={}
  insertar['nombrec'] = nombrec
  insertar['cantidad'] = cantidad
  insertar['f_ingreso'] = f_ingreso.slice (0, -19)
  insertar['estado'] = estado

  this.firestore.collection('/joyasOro/').add(insertar).then (() => {
  this.insertar = {nombrec :  '', cantidad : '', f_ingreso: '',estado: ''}
    
  })
  this.router.navigateByUrl('muestraoro');

  }


}
