import { Component, OnInit } from '@angular/core';
import { CarData } from '../entity/car-data.model';
import { MapService } from './map.service';

@Component({
  selector: 'rb-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;

  private carDataHistory: CarData[] = [];
  private currentCoord = {lat: 0, lng: 0};

  // Tirar daqui e colocar no json
  public flightPlanCoordinates  = [
    {lat: -22.898386, lng: -47.117417, speed: 10},
    {lat: -22.898475, lng: -47.117658, speed: 15},
    {lat: -22.898797, lng: -47.117573, speed: 20},
    {lat: -22.898980, lng: -47.117574, speed: 16},
    {lat: -22.899138, lng: -47.116818, speed: 14},
    {lat: -22.899014, lng: -47.116137, speed: 8},
    {lat: -22.898901, lng: -47.115616, speed: 20},
    {lat: -22.898796, lng: -47.115048, speed: 30},
    {lat: -22.899201, lng: -47.114951, speed: 30},
    {lat: -22.899265, lng: -47.114956, speed: 40},
    {lat: -22.899339, lng: -47.115015, speed: 20},
    {lat: -22.899334, lng: -47.115460, speed: 50},
    {lat: -22.899336, lng: -47.115838, speed: 20},
    {lat: -22.899383, lng: -47.116222, speed: 50},
  ];

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
      // Referenciar array do servico com deste component
      console.log(this.flightPlanCoordinates);
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  public getColor(index: number): string {

    switch (true) {

      case(this.flightPlanCoordinates[index].speed <= 10):
          return 'green';
          break;
      case(this.flightPlanCoordinates[index].speed <= 20):
          return 'blue';
          break;
      case(this.flightPlanCoordinates[index].speed <= 30):
          return 'red';
          break;
      default:
          return 'black';
          break;
    }
  }
}
