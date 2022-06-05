import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  public open:boolean = false;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  setOpen(bool:boolean){
    this.appService.sidebarSubject.next(bool);
  }

}
