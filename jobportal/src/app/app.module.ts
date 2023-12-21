import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { EloginComponent } from './pages/elogin/elogin.component';
import { EregistrationComponent } from './pages/eregistration/eregistration.component';
import { JobseekerpageComponent } from './pages/jobseekerpage/jobseekerpage.component';
import { EmployerpageComponent } from './pages/employerpage/employerpage.component';
import { EmployerpostedjobspageComponent } from './pages/employerpostedjobspage/employerpostedjobspage.component';
import { AppliedjobspageComponent } from './pages/appliedjobspage/appliedjobspage.component'; 
import { MessageService } from 'primeng/api';
import { JsresetpassComponent } from './pages/jsresetpass/jsresetpass.component';
import { eresetpassComponent } from './pages/eresetpass/eresetpass.component';
const appRoutes: Routes = [						
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component:LoginComponent  },
  { path: 'eregistration', component:EregistrationComponent },
  { path: 'elogin', component:EloginComponent  },
  { path: 'employerpage', component: EmployerpageComponent  },
  { path: 'postedjobs', component:  EmployerpostedjobspageComponent  },
  { path: 'profilepage', component:  JobseekerpageComponent  },
  { path: 'applyjobs', component:  AppliedjobspageComponent  },
  { path: 'jsresetpass', component:  JsresetpassComponent  },
  { path: 'eresetpass', component:  eresetpassComponent  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,

    AboutComponent,
    ContactComponent,

    RegistrationComponent,
    LoginComponent,
    EloginComponent,
    EregistrationComponent,
    JobseekerpageComponent,
    EmployerpageComponent,
    EmployerpostedjobspageComponent,
    AppliedjobspageComponent,
    JsresetpassComponent,
    eresetpassComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
