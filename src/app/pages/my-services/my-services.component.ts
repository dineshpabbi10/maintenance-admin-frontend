import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  public cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  public mockServices = [
    {
      category:'Hair',
      services:[
        {
          service: "Men's Cutting",
          description : 'Hair cut for men . Includes Shampoo and massage.',
          cost: '21.99 $'
        },
        {
          service: "Men's Cutting",
          description : 'Hair cut for men . Includes Shampoo and massage.',
          cost: '21.99 $'
        }
      ]
    },
    {
      category:'Massage',
      services:[
        {
          service: "Men's Cutting",
          description : 'Hair cut for men . Includes Shampoo and massage.',
          cost: '21.99 $'
        }
      ]
    },
    {
      category:'Cleaning',
      services:[
        {
          service: "Men's Cutting",
          description : 'Hair cut for men . Includes Shampoo and massage.',
          cost: '21.99 $'
        },
        {
          service: "Men's Cutting",
          description : 'Hair cut for men . Includes Shampoo and massage.',
          cost: '21.99 $'
        },
        {
          service: "Men's Cutting",
          description : 'Hair cut for men . Includes Shampoo and massage.',
          cost: '21.99 $'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
