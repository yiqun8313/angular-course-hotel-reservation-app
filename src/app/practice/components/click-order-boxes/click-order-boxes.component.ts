import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-click-order-boxes',
  templateUrl: './click-order-boxes.component.html',
  styleUrls: ['./click-order-boxes.component.css']
})
export class ClickOrderBoxesComponent {
  clickOrder: number[] = [];
  resettingBoxes = false;
  readonly boxes = [0, 1, 2, 3, 4];

  async clickBox(index: number): Promise<void> {
    if (this.resettingBoxes || this.clickOrder.includes(index)) return;
    this.clickOrder.push(index);
    if (this.clickOrder.length !== this.boxes.length) return;
    this.resettingBoxes = true;
    for (const item of [...this.clickOrder].reverse()) {
      await new Promise(resolve => setTimeout(resolve, 350));
      this.clickOrder = this.clickOrder.filter(value => value !== item);
    }
    this.resettingBoxes = false;
  }
}
