import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartsPageComponent implements OnInit {

  item:string = 'Графики';
  constructor() { }

  ngOnInit(): void {
  }

}
