import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteInputComponent } from './components/note-input/note-input.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { DailogBoxComponent } from './components/dailog-box/dailog-box.component';
// import {MatCardModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { IconCompComponent } from './components/icon-comp/icon-comp.component';
import { TrashcompComponent } from './components/trashcomp/trashcomp.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AuthguardServiceService } from './services/authguard-service.service';
import { PipePipe } from './pipe/pipe.pipe';
// import {AuthenticationGuard} from './authentication.guard'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NoteInputComponent,
    GetallnotesComponent,
    DisplaynotesComponent,
    DailogBoxComponent,
    IconCompComponent,
    TrashcompComponent,
    ArchiveComponent,
    ParentComponent,
    ChildComponent,
    PipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FontAwesomeModule,
    // MatCardModule,
    MatDialogModule,
    MatMenuModule

  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
