import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  search = '';
  selectedSearch = false;
  private readonly fruits = ['Apple', 'Banana', 'Blueberry', 'Orange', 'Strawberry'];

  get filteredFruit(): string[] {
    return this.selectedSearch
      ? []
      : this.fruits.filter(item => item.toLowerCase().includes(this.search.toLowerCase()));
  }

  markDirty(): void {
    this.selectedSearch = false;
  }

  selectSearch(item: string): void {
    this.search = item;
    this.selectedSearch = true;
  }
}
