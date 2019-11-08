import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { CarData } from '../entity/car-data.model';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  // Constant
  private static readonly INTERVAL = 1000;
  private requestId = 1;
  // Properties
  private intervalTimer: any;
  private counter = 0;

  // Future implementation for backend
  private id;

  public carDataHistory: CarData[] = [];

  // Events
  public carDataHistoryUpdate = new EventEmitter<CarData[]>();

  constructor() { }

  public startRecording() {

    this.intervalTimer = setInterval(async () => {

      // Simulating getting the data from a server
      const response = await fetch('../../assets/location-data-history.json');
      const responsed = await fetch('https://rb-surface-classifier.azurewebsites.net/api/'+this.requestId);
      this.requestId += 500;
      console.log(responsed);
      const jsonData = await response.json();
      if (this.counter >= Object.keys(jsonData).length) {
        this.stopRecording();

      } else {

        this.counter++;
        this.carDataHistory.push(jsonData[this.counter]);
        // Emetting the event
        this.carDataHistoryUpdate.emit(this.carDataHistory);
      }
    }, MapService.INTERVAL);

  }

  public stopRecording() {
    clearInterval(this.intervalTimer);
  }

  public restartRecording() {
    clearInterval(this.intervalTimer);

    const backUp = this.carDataHistory.splice(0, this.carDataHistory.length);
    this.carDataHistory.push(backUp[0]);
    this.requestId = 1;
    this.counter = 0;
  }
}
