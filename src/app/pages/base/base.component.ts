import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      items: [{
          label: 'Tech Stacks',
          icon: 'pi pi-th-large',
          routerLink: '/'
      },
      {
          label: 'Time',
          icon: 'pi pi-users',
          routerLink: '/team'
      }
      ]}
    ];
  }
}
