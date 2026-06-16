import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  page = 1;
  readonly allItems = Array.from({ length: 22 }, (_, index) => `Item ${index + 1}`);
  readonly pages = [1, 2, 3, 4, 5];

  get visibleItems(): string[] {
    return this.allItems.slice((this.page - 1) * 5, this.page * 5);
  }
}
