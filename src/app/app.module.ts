import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
//import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



import { IntroComponent } from './Components/intro/intro.component';
import { AboutComponent } from './Components/about/about.component';
import { EducationComponent } from './Components/education/education.component';
import { BlogComponent } from './Components/blog/blog.component';
import { SayHelloComponent } from './Components/say-hello/say-hello.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { JobComponent } from './Components/job/job.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { SelectedWorkComponent } from './Components/selected-work/selected-work.component';


@NgModule({
  declarations: [
    AppComponent,
    
    IntroComponent,
    AboutComponent,
    EducationComponent,
    BlogComponent,
    SayHelloComponent,
    FooterComponent,
    NavbarComponent,
    JobComponent,
    SkillsComponent,
    SelectedWorkComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    
    MatSliderModule,
  
    
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
