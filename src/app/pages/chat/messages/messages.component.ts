import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input()
  public showBack:any = false;
  @Input()
  public smallScreen:any = false;
  public chatId:any = null;
  public favourites:any = ['a','b','c','d','e','f','i','j','k','l','m','n','o','p','q'];

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.showList$.subscribe((data:any)=>{
      // get chatId and fetch chat
      this.chatId = data.chatId;
    });
  }

  openContacts(){
    this.appService.showList.next({
      status:true,
      chatId:null
    });
  }

}
