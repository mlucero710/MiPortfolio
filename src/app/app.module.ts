import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'

import {PortfolioService} from './services/portfolio.service';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BackgoundHeaderComponent } from './components/header/backgound-header/backgound-header.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { HeaderButtonsComponent } from './components/header-buttons/header-buttons.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { SkillsComponentComponent } from './components/skills-component/skills-component.component';
import { ProjectsComponent } from './components/projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ButtonComponent,
    HeaderComponent,
    BackgoundHeaderComponent,
    ProfilePictureComponent,
    HeaderButtonsComponent,
    AboutSectionComponent,
    EditButtonComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    SkillsComponentComponent,
    ProjectsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
