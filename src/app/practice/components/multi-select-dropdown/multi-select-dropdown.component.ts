import { Component } from '@angular/core';

type Option = { label: string; value: string };

@Component({
  selector: 'app-practice-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css']
})
export class MultiSelectDropdownComponent {
  selectedFruits: string[] = [];
  multiOpen = false;
  readonly options: Option[] = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' }
  ];

  toggleFruit(value: string): void {
    this.selectedFruits = this.selectedFruits.includes(value)
      ? this.selectedFruits.filter(item => item !== value)
      : [...this.selectedFruits, value];
  }
}
