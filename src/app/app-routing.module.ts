import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { JobListComponent } from './pages/dashboard/components/job-list/job-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'recent',component:JobListComponent},
    {path:'matches',component:JobListComponent},
    {path:'saved',component:JobListComponent},
    {path:'',redirectTo:'recent',pathMatch:'full'}
  ]},
  {path:'myservices',component:MyServicesComponent},
  {path:'invoices',component:InvoicesComponent},
  {path:'jobs',component:JobsComponent},
  {path:'chats',component:ChatComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'*',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
