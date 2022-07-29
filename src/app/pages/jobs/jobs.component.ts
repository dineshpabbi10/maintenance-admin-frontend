import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor() { }
  jobs = [
    { name: "Applied" },
    { name: "Inprogress" },
    { name: "Completed" }
  ];

  ngOnInit(): void {
  }

}
