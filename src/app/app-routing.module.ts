import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './pages/app-container/app-container.component';
import { ChatComponent } from './pages/chat/chat.component';
import { JobListComponent } from './pages/dashboard/components/job-list/job-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LandingContainerComponent } from './pages/landing-container/landing-container.component';
import { LoginComponent } from './pages/login/login.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppContainerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'recent', component: JobListComponent },
          { path: 'matches', component: JobListComponent },
          { path: 'saved', component: JobListComponent },
          { path: '', redirectTo: 'recent', pathMatch: 'full' },
        ],
      },
      { path: 'myservices', component: MyServicesComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'chats', component: ChatComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LandingContainerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
