import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


// control formulario
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-camp',
  templateUrl: './camp.page.html',
  styleUrls: ['./camp.page.scss'],
})
export class CampPage implements OnInit {
  id:string;
  doc: any;
  insertar:{nombrec: string ; cantidad: string ; f_inicio: string ; f_final: string ; estado: string; };
  
  
  constructor(
    private firestore: AngularFirestore ,
     public formBuilder: FormBuilder,
     
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
   this.insertar = {nombrec : '' ,cantidad : '', f_inicio : '', f_final : '', estado : ''}  
   this.id = this.route.snapshot.paramMap.get('id');
  }
  
  cambiofecha(event)
  {
    console.log('ionChange',event);
    console.log('Date', new Date(event.detail.value))
  }
 
  guardar(nombrec, cantidad, f_inicio, f_final, estado=null){
  estado="Vigente"; 
  
  let insertar={}
  insertar['nombrec'] = nombrec
  insertar['cantidad'] = cantidad
  insertar['f_inicio'] = f_inicio.slice (0, -19)
  insertar['f_final'] = f_final. slice (0, -19)
  insertar['estado'] = estado

  this.firestore.collection('/ingreso/').add(insertar).then (() => {
  this.insertar = {nombrec :  '', cantidad : '', f_inicio : '', f_final: '', estado: ''}
    
  })
  this.router.navigateByUrl('home');

  }


}
