import { Injectable } from '@angular/core';

// firebase 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'; // important sous cette forme

@Injectable({
  providedIn: 'root'
})
export class CrudsService {

  constructor(
    private afs: AngularFirestore
  ) { }

  addMessage(objet:any){
   return this.afs.collection('emails').add(objet);
  }
}
