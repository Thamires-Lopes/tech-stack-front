import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeckStackInfoListMock } from 'src/app/mocks/teck-stach-info-list-mock';
import { TechStackInfoDto } from 'src/app/models/dtos/tech-stack-info.dto';

@Component({
  selector: 'app-tech-stack-list',
  templateUrl: './tech-stack-list.component.html',
  styleUrls: ['./tech-stack-list.component.css']
})
export class TechStackListComponent implements OnInit {

  techStackList : TechStackInfoDto[] = TeckStackInfoListMock

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirect(id?: number) {
    this.router.navigate(['/tech-detail', {id: id}]);
  }
}
