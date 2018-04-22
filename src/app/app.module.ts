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
//import {AppRoutingModule, routingComponents} from './app-routing.module';
//import { routes } from "./app-routing.module";
import { RouterModule } from '@angular/router';

//components
import { SistemaComponentComponent } from './components/sistema-component/sistema-component.component';
import { InsitucionComponentComponent } from './components/insitucion-component/insitucion-component.component';
import { DocenteComponentComponent } from './components/docente-component/docente-component.component';
import { PsicopedaComponentComponent } from './components/psicopeda-component/psicopeda-component.component';
import { PsicoComponentComponent } from './components/psico-component/psico-component.component';
import { InicioInstitucionComponent } from './components/insitucion-component/inicio-institucion/inicio-institucion.component';
import { DocenteInsitucionComponent } from './components/insitucion-component/docente-insitucion/docente-insitucion.component';
import { InformacionInsitucionComponent } from './components/insitucion-component/informacion-insitucion/informacion-insitucion.component';
import { EstudianteInsitucionComponent } from './components/insitucion-component/estudiante-insitucion/estudiante-insitucion.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SistemaComponentComponent,
    InsitucionComponentComponent,
    DocenteComponentComponent,
    PsicopedaComponentComponent,
    PsicoComponentComponent,
    InicioInstitucionComponent,
    DocenteInsitucionComponent,
    InformacionInsitucionComponent,
    EstudianteInsitucionComponent
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
    AngularFireDatabaseModule,
    //routing
    RouterModule.forRoot([
      {path: 'Sistema', component: SistemaComponentComponent},
      {path: 'Insitucion', component: InsitucionComponentComponent},
      {path: 'Psicopedagogo', component: PsicopedaComponentComponent},
      {path: 'Docente', component: DocenteComponentComponent},
      {path: 'Psicologo', component: PsicoComponentComponent}
     /* {path: "**", redirectTo: "/"},
      {path: "", redirectTo: "/"}*/
  ])
    
  ],
  providers: [
    AutenticathorService,
    DocenteService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
