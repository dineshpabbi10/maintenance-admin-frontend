import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  public sidebarOpen : boolean = true;

  constructor(private appService : AppService) { }

  ngOnInit(): void {
    this.appService.sidebarSubject$.subscribe((isOpen:boolean)=>{
      this.sidebarOpen = isOpen;
    })
  }
  
  setOpen(bool:boolean){
    this.appService.sidebarSubject.next(bool);
  }

}
