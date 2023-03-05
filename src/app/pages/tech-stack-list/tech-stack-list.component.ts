import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack-list',
  templateUrl: './tech-stack-list.component.html',
  styleUrls: ['./tech-stack-list.component.css']
})
export class TechStackListComponent implements OnInit {

  techStackList = [
    {
      Name: ".Net",
      Count: 10
    },
    {
      Name: ".Net",
      Count: 10
    },{
      Name: ".Net",
      Count: 10
    },{
      Name: ".Net",
      Count: 10
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
