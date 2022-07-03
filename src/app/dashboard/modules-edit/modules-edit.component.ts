import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-edit',
  templateUrl: './modules-edit.component.html',
  styleUrls: ['./modules-edit.component.css']
})
export class ModulesEditComponent implements OnInit {
  item:string = 'Редактор модулей';
  constructor() { }

  ngOnInit(): void {
  }

}
