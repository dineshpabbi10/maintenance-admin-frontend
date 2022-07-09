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
import { AppContainerComponent } from './pages/app-container/app-container.component';
import { LandingContainerComponent } from './pages/landing-container/landing-container.component';
import { LandingNavbarComponent } from './pages/landing-container/components/landing-navbar/landing-navbar.component';
import { TestimonialsComponent } from './pages/landing-container/components/testimonials/testimonials.component';
import { FeaturesComponent } from './pages/landing-container/components/features/features.component';
import { WhyChoseUsComponent } from './pages/landing-container/components/why-chose-us/why-chose-us.component';
import { OurImpactComponent } from './pages/landing-container/components/our-impact/our-impact.component';
import { FooterComponent } from './pages/landing-container/components/footer/footer.component';
import { DiveInComponent } from './pages/landing-container/components/dive-in/dive-in.component';
import { BlogsComponent } from './pages/landing-container/components/blogs/blogs.component';
import { PricingComponent } from './pages/landing-container/components/pricing/pricing.component';
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
    AppContainerComponent,
    LandingContainerComponent,
    LandingNavbarComponent,
    TestimonialsComponent,
    FeaturesComponent,
    WhyChoseUsComponent,
    OurImpactComponent,
    FooterComponent,
    DiveInComponent,
    BlogsComponent,
    PricingComponent,
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
