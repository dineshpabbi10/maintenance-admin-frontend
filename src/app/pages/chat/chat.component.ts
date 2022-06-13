import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public showList:any = true;

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.showList$.subscribe((data:any)=>{
      this.showList = data.status;
    });
  }

}
