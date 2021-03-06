import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreModule } from "@angular/fire/firestore";
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AbmService {
  public afs;
  constructor(/*private afs: AngularFirestore*/) { 
    this.afs=firebase.default.firestore()
  }  
  

  public insertar(document:AngularFirestoreDocument,coleccion:string){
      this.afs.collection(coleccion).add(document)
      .then(() => {
        console.log("Documento guardado exitosamente");
    })
    .catch((error) => {
        console.log("Error -->: ", error);
    });
  }

  
  public borrar(coleccion,documentID){ 
      this.afs.collection(coleccion).doc(documentID).delete()
      .then(()=>{
        console.log("Documento borrado exitsamete");
      })
      .catch( (error) =>{
        console.log("error ==>",error);
      });

      
  }

  


  /*public actualizar(documento:AngularFirestoreDocument,coleccion:string,campo:string,reemplazo:string){

  }     
*/
  public select(coleccion:string,documentID:string){
   
  }
  
}
