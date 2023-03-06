import { Component, Input, OnInit } from '@angular/core';
import { TechStackInfoDto } from 'src/app/models/dtos/tech-stack-info.dto';

@Component({
  selector: 'app-tech-stack-info',
  templateUrl: './tech-stack-info.component.html',
  styleUrls: ['./tech-stack-info.component.css']
})
export class TechStackInfoComponent implements OnInit {

  @Input() techInfo?: TechStackInfoDto;

  constructor() { }

  ngOnInit(): void {
    console.log(this.techInfo);
  }

}
