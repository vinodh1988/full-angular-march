import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContactItemComponent } from './pages/contacts/contact-item/contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCardComponent } from './pages/home/service-card/service-card.component';
import { EnqiryFormComponent } from './pages/home/enqiry-form/enqiry-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './common/login/login.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactsComponent,
    MenuBarComponent,
    ContactItemComponent,
    ServiceCardComponent,
    EnqiryFormComponent,
    LoginComponent,
    EnquiriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
