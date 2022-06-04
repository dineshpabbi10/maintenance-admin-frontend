import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ui';
  sidebarOpen :boolean = true;

  constructor(private appService:AppService){
  }

  ngOnInit(): void {
    this.appService.sidebarSubject$.subscribe((isOpen:boolean)=>{
      this.sidebarOpen = isOpen;
    })
  }

}
