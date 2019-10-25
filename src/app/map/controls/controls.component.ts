import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'rb-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  private isPlaying = false;

  constructor(protected mapService: MapService) { }

  protected onPlayBtnClick(): void {
    if (this.isPlaying) {
      this.mapService.stopRecording();
    } else {
      this.mapService.startRecording();
    }
    this.isPlaying = !this.isPlaying;
  }

  private onResetBtnClick() {
    this.mapService.restartRecording();
    this.isPlaying = false;
  }
}
