import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  public open:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setOpen(bool:boolean){
    this.open = bool;
  }

}
