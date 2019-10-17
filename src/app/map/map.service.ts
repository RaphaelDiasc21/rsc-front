import { Injectable } from '@angular/core';
import { CarData } from '../entity/car-data.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  // Constant
  private static readonly INTERVAL = 1000;

  private intervalTimer;
  private counter = 0;

  public carDataHistory: CarData[] = [];

  constructor() { }

  public startRecording() {

    this.intervalTimer = setInterval(async () => {

      // Simulating getting the data from a server
      const response = await fetch('../../assets/location-data-history.json');
      const jsonData = await response.json();

      if (this.counter >= 10) {
        this.counter = 0;
      } else {
        this.counter++;
      }

      this.carDataHistory.push(jsonData[this.counter]);
    }, MapService.INTERVAL);

  }
}
