import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

//authenticador firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//modelo
import { __User } from "../models/user";

//router
import { RouterLink } from '@angular/router';

//base de datos
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';






@Injectable()
export class AutenticathorService {

  user: Observable<firebase.User>;
  
  _user : AngularFireList<any>;


  constructor(
    private firebaseAuth: AngularFireAuth,
    private fireUsuario: AngularFireDatabase,
    
  ) {
    this.user = firebaseAuth.authState;
   }


   getUsusarios()
   {
     this._user = this.fireUsuario.list('usuarios');
     
   }

   addCustomKey() { 
     var fff = this.fireUsuario.object('usuarios/LAaVZSgntYnL1WamPV4');
     fff.set('Prueba');
    } 

   signup(_email: string, _password: string) {

    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(_email, _password)
      .then(value => {

        //registrar usuario como administrador de establecimiento
        this.getUsusarios();
        this._user.push({
          codigo : value.uid,
          email : value.email,
          tipo : 1,
          estado : true,
          nombreInsitucion: ''
        });

             

      })
      .catch(err => {
        alert('Something went wrong:' + err.message);
      });    
  }




  login(email: string, password: string) {
 
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value =>{
        this.getUsusarios();
        var _us : any;
        console.log("Creo que funciona1");
        for(_us in this._user)
        {
          console.log("Creo que funciona2");
          if(_us.codigo==value.uid)
          {
            console.log("Creo que funciona3");
            switch (_us.tipo)
            {
              case 0:;
              case 1: console.log("Creo que funciona4");
              case 2:;
              case 3:;
              case 4:;
              case 5:;

            }
          }

        }

        
        
        
      })
      .catch(err => {
        alert("Error de authentication");
      });
  }

  

  logout(key, value) {
    const users = this.fireUsuario.object('usuarios'); 
    users.update({ [key]: value });
   /* this.firebaseAuth
      .auth
      .signOut();
      var fff = this.fireUsuario.object(`/usuarios/${key}`);
     fff.set(value);*/
  }

}
