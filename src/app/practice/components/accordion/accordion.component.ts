import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  openAccordion: number | null = null;
  accordionItems = [
    { title: 'React', content: 'React is a UI library.' },
    { title: 'Vue', content: 'Vue is a frontend framework.' },
    { title: 'Angular', content: 'Angular is a full framework.' }
  ];
}
