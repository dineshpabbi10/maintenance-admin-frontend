import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  public sidebarOpen : boolean = true;
  public url:any = '';
  public display:boolean = false;
  public searchJobsText =  new FormControl('');

  constructor(private appService : AppService, private router: Router) { }

  ngOnInit(): void {
    this.appService.sidebarSubject$.subscribe((isOpen:boolean)=>{
      this.sidebarOpen = isOpen;
    });

    // detech route changes
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
          // get current route
          this.url = event?.url;
      }
    });
  }
  
  setOpen(bool:boolean){
    this.appService.sidebarSubject.next(bool);
  }

  getTitleName(){
    if(this.url === "/dashboard"){
      return "Dashboard";
    }
    else if(this.url === "/invoices"){
      return "Invoices";
    }
    else if(this.url === "/feedback"){
      return "Feedback";
    }
    else if(this.url === "/jobs"){
      return "Jobs"
    }
    return "";
  }

  alert(){
    alert(this.searchJobsText.value);
  }
 
}
