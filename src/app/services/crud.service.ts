import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export class TODO {
  nombrec: string;
  cantidad: string;
  f_inicio: string;
  f_final: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  create(todo: TODO) {
    return this.firestore.collection('ingreso').add(todo);
  }

  getTasks() {
    return this.firestore.collection('ingreso').snapshotChanges();
  }
  
  getTask(id) {
    return this.firestore.collection('ingreso').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    this.firestore.collection('ingreso').doc(id).update(todo)
      .then(() => {
        this.router.navigate(['/home']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.firestore.doc('ingreso/' + id).delete();
  }

}
