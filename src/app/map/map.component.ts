import { Component, OnInit } from '@angular/core';
import { CarData } from '../entity/car-data.model';
import { MapService } from './map.service';

@Component({
  selector: 'rb-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private carDataHistory: CarData[] = [];
  private currentCoord = {lat: 0, lng: 0};

  constructor(private mapService: MapService) { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition( (clientPos) => {

      this.currentCoord.lat = clientPos.coords.latitude;
      this.currentCoord.lng = clientPos.coords.longitude;

      console.log(this.carDataHistory);
    });

    this.carDataHistory = this.mapService.carDataHistory;
    this.mapService.startRecording();
  }

}
