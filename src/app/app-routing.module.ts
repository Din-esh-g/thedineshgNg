import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { IntroComponent } from './Components/intro/intro.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { JobComponent } from './Components/job/job.component';
import { SayHelloComponent } from './Components/say-hello/say-hello.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'job', component: JobComponent },
  { path: 'contract', component: SayHelloComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
