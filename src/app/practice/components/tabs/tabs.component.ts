import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabs = [
    { label: 'Home', content: 'Home Page' },
    { label: 'Profile', content: 'Profile Page' },
    { label: 'Settings', content: 'Settings Page' }
  ];
  activeTab = 0;
}
