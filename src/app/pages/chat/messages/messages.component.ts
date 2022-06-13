import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public favourites:any = ['a','b','c','d','e','f','i','j','k','l','m','n','o','p','q'];

  constructor() { }

  ngOnInit(): void {
  }

}
