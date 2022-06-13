import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public favourites:any = ['a','b','c','d','e','f','i','j','k','l','m','n','o','p','q'];

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  openConversation(id:any){
    this.appService.showList.next({
      status:false,
      chatId:id
    });
  }

}
