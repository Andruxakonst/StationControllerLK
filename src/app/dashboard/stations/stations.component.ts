import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  item:string = 'Станции';
  constructor() { }

  ngOnInit(): void {
  }

}
