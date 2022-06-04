import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-dropdown',
  templateUrl: './title-dropdown.component.html',
  styleUrls: ['./title-dropdown.component.css']
})
export class TitleDropdownComponent implements OnInit {
  public open:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setOpen(bool:boolean){
    this.open = bool;
  }

}
