import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  readonly weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  currentMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  selectedDay: number | null = new Date().getDate();

  get calendarYear(): number {
    return this.currentMonth.getFullYear();
  }

  get calendarMonth(): number {
    return this.currentMonth.getMonth();
  }

  get calendarDays(): (number | null)[] {
    const blanks = Array(this.currentMonth.getDay()).fill(null);
    const days = new Date(this.calendarYear, this.calendarMonth + 1, 0).getDate();
    return [...blanks, ...Array.from({ length: days }, (_, index) => index + 1)];
  }

  changeMonth(amount: number): void {
    this.currentMonth = new Date(this.calendarYear, this.calendarMonth + amount, 1);
    this.selectedDay = null;
  }
}
