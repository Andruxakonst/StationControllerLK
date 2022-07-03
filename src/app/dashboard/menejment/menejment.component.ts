import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menejment',
  templateUrl: './menejment.component.html',
  styleUrls: ['./menejment.component.css']
})
export class MenejmentComponent implements OnInit {
  item:string = 'Менеджмент';
  constructor() { }

  ngOnInit(): void {
  }

}
