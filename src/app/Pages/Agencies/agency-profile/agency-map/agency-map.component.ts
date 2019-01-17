import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-map',
  templateUrl: './agency-map.component.html',
  styleUrls: ['./agency-map.component.scss']
})
export class AgencyMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor() { }

  ngOnInit() {
  }

}
