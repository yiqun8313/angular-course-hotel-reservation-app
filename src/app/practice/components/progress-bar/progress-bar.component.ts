import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  progress = 30;

  adjustProgress(amount: number): void {
    this.progress = Math.max(0, Math.min(100, this.progress + amount));
  }
}
