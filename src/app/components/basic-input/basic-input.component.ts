import { Component, Input, OnInit } from '@angular/core';
import { TiposRelevanciaList } from 'src/app/models/enums/tipo-relevancia.enum';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css']
})
export class BasicInputComponent implements OnInit {

  @Input() title: string = "";
  @Input() showOptions: boolean = false;

  options: {value: number, label: string}[] = TiposRelevanciaList;
  optionSelected: number = 0;

  constructor() {}

  ngOnInit(): void {
  }

}
