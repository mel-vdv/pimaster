import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ResearchComponent } from './research/research.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { CertificationsComponent } from './certifications/certifications.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'certif', component: CertificationsComponent},
  {path: 'surgery', component: SurgeryComponent},
  {path: 'teaching', component: TeachingComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'mentions-legales', component: RgpdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
