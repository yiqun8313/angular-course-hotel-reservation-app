import { Component } from '@angular/core';

type Option = { label: string; value: string };

@Component({
  selector: 'app-practice-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent {
  fruit = '';
  dropdownOpen = false;
  readonly options: Option[] = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' }
  ];
}
