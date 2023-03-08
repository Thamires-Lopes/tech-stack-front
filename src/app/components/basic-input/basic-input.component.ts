import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css']
})
export class BasicInputComponent implements OnInit {

  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
