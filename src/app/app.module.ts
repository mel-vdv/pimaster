import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ResearchComponent } from './research/research.component';
import { ContactComponent } from './contact/contact.component';
import { NavigComponent } from './navig/navig.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { DevisComponent } from './devis/devis.component';
import { KeyComponent } from './key/key.component';
import { LegacyComponent } from './legacy/legacy.component';
import { RgpdComponent } from './rgpd/rgpd.component';


//firebase
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/trad/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurgeryComponent,
    TeachingComponent,
    ResearchComponent,
    ContactComponent,
    NavigComponent,
    ResumeComponent,
    FooterComponent,
    DevisComponent,
    KeyComponent,
    LegacyComponent,
    RgpdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
     
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireStorageModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }////////////////////////on ajoute pour éviter une error
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
