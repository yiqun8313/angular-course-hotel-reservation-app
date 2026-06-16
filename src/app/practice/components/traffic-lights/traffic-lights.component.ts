import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-practice-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.css']
})
export class TrafficLightsComponent implements OnDestroy {
  activeLight = 0;
  lights = [{ color: 'red', duration: 3000 }, { color: 'green', duration: 3000 }, { color: 'yellow', duration: 1000 }];
  lightsPaused = false;
  private lightTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.scheduleLight();
  }

  ngOnDestroy(): void {
    clearTimeout(this.lightTimer);
  }

  toggleLights(): void {
    this.lightsPaused = !this.lightsPaused;
    clearTimeout(this.lightTimer);
    if (!this.lightsPaused) this.scheduleLight();
  }

  private scheduleLight(): void {
    this.lightTimer = setTimeout(() => {
      this.activeLight = (this.activeLight + 1) % this.lights.length;
      this.scheduleLight();
    }, this.lights[this.activeLight].duration);
  }
}
