import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent implements OnInit {
  public mobileOpen :any = false;

  constructor() { }

  ngOnInit(): void {
  }

  setMobileOpen(value:any){
    this.mobileOpen = value;
  }

}
