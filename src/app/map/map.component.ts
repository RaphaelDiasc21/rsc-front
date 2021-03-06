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

  protected carDataHistory: CarData[] = [];
  protected currentCoord = {lat: 0, lng: 0};

  constructor(private mapService: MapService) { }

  ngOnInit(): void {

    // Setting initial position
    this.setCurrentPosition();

    // Listening to changes from MapService
    this.mapService.carDataHistoryUpdate
      .subscribe(
        (carData: CarData[]) => {
          console.log(carData);
          this.carDataHistory = carData;
        }
      );
  }

  private setCurrentPosition(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.currentCoord.lat = position.coords.latitude;
        this.currentCoord.lng = position.coords.longitude;
      });
    }
  }

  public getColor(index: number): string {

    switch (true) {

      case(this.carDataHistory[index].speed <= 10):
          return 'green';
      case(this.carDataHistory[index].speed <= 20):
          return 'blue';
      case(this.carDataHistory[index].speed <= 30):
          return 'red';
      default:
          return 'black';
    }
  }
}
