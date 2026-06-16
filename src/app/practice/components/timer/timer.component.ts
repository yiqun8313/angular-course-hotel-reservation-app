import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-practice-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {
  seconds = 0;
  timerActive = false;
  private secondTimer?: ReturnType<typeof setInterval>;

  ngOnDestroy(): void {
    clearInterval(this.secondTimer);
  }

  startTimer(): void {
    if (this.timerActive) return;
    this.timerActive = true;
    this.secondTimer = setInterval(() => this.seconds++, 1000);
  }

  pauseTimer(): void {
    this.timerActive = false;
    clearInterval(this.secondTimer);
  }

  resetTimer(): void {
    this.pauseTimer();
    this.seconds = 0;
  }
}
