import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { JobsComponent } from './pages/jobs/jobs.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'invoices',component:InvoicesComponent},
  {path:'jobs',component:JobsComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
