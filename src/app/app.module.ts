import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment"
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//firebase
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';

//Services
import { AutenticathorService } from "./services/autenticathor.service";
import { DocenteService } from './services/docente.service'
import { UsuarioService } from './services/usuario.service'

//autheticathor
import { AngularFireAuthModule } from 'angularfire2/auth';

//routing
import {AppRoutingModule, routingComponents} from './app-routing.module'

import { SistemaComponentComponent } from './components/sistema-component/sistema-component.component';
import { InsitucionComponentComponent } from './components/insitucion-component/insitucion-component.component';
import { DocenteComponentComponent } from './components/docente-component/docente-component.component';
import { PsicopedaComponentComponent } from './components/psicopeda-component/psicopeda-component.component';
import { PsicoComponentComponent } from './components/psico-component/psico-component.component';

import { routes } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    SistemaComponentComponent,
    InsitucionComponentComponent,
    DocenteComponentComponent,
    PsicopedaComponentComponent,
    PsicoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    
    //firebase
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  providers: [
    AutenticathorService,
    DocenteService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
