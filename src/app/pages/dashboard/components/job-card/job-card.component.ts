import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input()
  public jobTitle = 'HVAC Repair Needed';

  @Input()
  public budget = 500;

  @Input()
  public pricing = 'Negotiable';

  @Input()
  public posted = '2 Hours ago';

  @Input()
  public description = 'Need basic code written for “better touch tool” or "Keyboard Maestro" to make purchases on chrome desktop from a retail website over and over again. The code would need to only purchase 1 time from the 1 website over and over and over again. This is very simple task.';

  @Input()
  public tags:any = ['Restaurant','HVAC'];

  @Input()
  public proposalCount:any = 3;

  @Input()
  public location:any = 'Calgary,AB';

  constructor() { }

  ngOnInit(): void {
  }

}
