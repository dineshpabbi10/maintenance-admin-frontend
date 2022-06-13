import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  public url:any;

  constructor(private router: Router) {
    this.router.events.subscribe((event:any)=>{
      if (event instanceof NavigationEnd) {
        // get current route
        this.url = event?.url;
    }
    });
   }

  ngOnInit(): void {
    
  }

}
