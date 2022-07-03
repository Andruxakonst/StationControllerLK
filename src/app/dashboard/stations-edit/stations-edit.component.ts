import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations-edit',
  templateUrl: './stations-edit.component.html',
  styleUrls: ['./stations-edit.component.css']
})
export class StationsEditComponent implements OnInit {
  item:string = 'Редактор станций';
  constructor() { }

  ngOnInit(): void {
  }

}
