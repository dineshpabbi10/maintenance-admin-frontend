import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css'],
})
export class AppContainerComponent implements OnInit {
  public sidebarOpen: boolean = true;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.sidebarSubject$.subscribe((isOpen: boolean) => {
      this.sidebarOpen = isOpen;
    });
  }
}
