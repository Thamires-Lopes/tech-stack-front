import { Component, OnInit } from '@angular/core';
import { TechStackInfoDetailMock } from 'src/app/mocks/tech-stack-info-detail.mock';
import { TechStackInfoDto } from 'src/app/models/dtos/tech-stack-info.dto';

@Component({
  selector: 'app-tech-stack-detail',
  templateUrl: './tech-stack-detail.component.html',
  styleUrls: ['./tech-stack-detail.component.css']
})
export class TechStackDetailComponent implements OnInit {

  techStackInfo: TechStackInfoDto = TechStackInfoDetailMock;

  constructor() { }

  ngOnInit(): void {
  }

}
