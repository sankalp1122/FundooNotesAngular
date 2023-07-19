import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteInputComponent } from './components/note-input/note-input.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { TrashcompComponent } from './components/trashcomp/trashcomp.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'notes',
        component: GetallnotesComponent,
      },
      {
        path: 'trashComp',
        component: TrashcompComponent,
      },
      {
        path: 'archive',
        component: ArchiveComponent,
      },
    ],
  },

  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
