import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  public cols: any;
  public products :any  = [
    {
      code:'CN',
      customer:'Vikas Arora',
      status:'In Process',
      date:'1st September , 2022'
    },
    {
      code:'CN',
      customer:'Vikas Arora',
      status:'In Process',
      date:'1st September , 2022'
    },
    {
      code:'CN',
      customer:'Vikas Arora',
      status:'In Process',
      date:'1st September , 2022'
    },
    {
      code:'CN',
      customer:'Vikas Arora',
      status:'In Process',
      date:'1st September , 2022'
    },
    {
      code:'CN',
      customer:'Vikas Arora',
      status:'In Process',
      date:'1st September , 2022'
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'customer', header: 'Customer Name' },
      { field: 'status', header: 'Invoice Status' },
      { field: 'date', header: 'Date' }
  ];
  }

  clear(table: any) {
    table.clear();
  }

}
