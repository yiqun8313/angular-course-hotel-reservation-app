import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-virtual-list',
  templateUrl: './virtual-list.component.html',
  styleUrls: ['./virtual-list.component.css'],
})
export class VirtualListComponent {
  virtualStart = 0;
  readonly virtualRows = Array.from({ length: 12 }, (_, index) => index);

  updateVirtual(event: Event): void {
    this.virtualStart = Math.floor(
      (event.currentTarget as HTMLElement).scrollTop / 40,
    );
  }

  get virtualVisible(): number[] {
    return this.virtualRows
      .map((_, index) => this.virtualStart + index)
      .filter((index) => index < 10000);
  }
}
