import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export class TODO {
  nombrec: string;
  cantidad: string;
  f_ingreso: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService2 {

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  create(todo: TODO) {
    return this.firestore.collection('joyasOro').add(todo);
  }

  getTasks() {
    return this.firestore.collection('joyasOro').snapshotChanges();
  }
  
  getTask(id) {
    return this.firestore.collection('joyasOro').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    this.firestore.collection('joyasOro').doc(id).update(todo)
      .then(() => {
        this.router.navigate(['/muestraoro']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.firestore.doc('joyasOro/' + id).delete();
  }

}
