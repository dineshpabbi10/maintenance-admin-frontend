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
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { JobListComponent } from './pages/dashboard/components/job-list/job-list.component';
import { ChipModule } from 'primeng/chip';
import { JobCardComponent } from './pages/dashboard/components/job-card/job-card.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ListComponent } from './pages/chat/list/list.component';
import { MessagesComponent } from './pages/chat/messages/messages.component';
import {AvatarModule} from 'primeng/avatar';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TitleBarComponent,
    TitleDropdownComponent,
    DashboardComponent,
    InvoicesComponent,
    FeedbackComponent,
    JobsComponent,
    JobListComponent,
    JobCardComponent,
    ChatComponent,
    ListComponent,
    MessagesComponent,
    MyServicesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    CardModule,
    CalendarModule,
    TabViewModule,
    ReactiveFormsModule,
    DividerModule,
    ChipModule,
    AvatarModule,
    DropdownModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
