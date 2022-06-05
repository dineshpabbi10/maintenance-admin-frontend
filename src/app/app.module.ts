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
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayPanelModule} from 'primeng/overlaypanel';


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
    AppRoutingModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
