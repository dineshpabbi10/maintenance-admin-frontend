import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public favourites:any = ['a','b','c','d','e','f','i','j','k','l','m','n','o','p','q']

  constructor() { }

  ngOnInit(): void {
  }

}
