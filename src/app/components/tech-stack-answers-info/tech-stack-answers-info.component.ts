import { Component, Input, OnInit } from '@angular/core';
import { TechStackInfoDto } from 'src/app/models/dtos/tech-stack-info.dto';

@Component({
  selector: 'app-tech-stack-answers-info',
  templateUrl: './tech-stack-answers-info.component.html',
  styleUrls: ['./tech-stack-answers-info.component.css']
})
export class TechStackAnswersInfoComponent implements OnInit {

  @Input() techInfo?: TechStackInfoDto;

  constructor() { }

  ngOnInit(): void {
  }

}
