import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TitleBarComponent } from './layout/title-bar/title-bar.component';
import { TitleDropdownComponent } from './layout/title-bar/title-dropdown/title-dropdown.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { JobsComponent } from './pages/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TitleBarComponent,
    TitleDropdownComponent,
    DashboardComponent,
    InvoicesComponent,
    FeedbackComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
