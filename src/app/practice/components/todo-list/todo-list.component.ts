import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  task = '';
  tasks: string[] = [];

  addTask(): void {
    if (!this.task.trim()) return;
    this.tasks.push(this.task.trim());
    this.task = '';
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  moveTask(index: number, amount: number): void {
    const target = index + amount;
    if (target < 0 || target >= this.tasks.length) return;
    [this.tasks[index], this.tasks[target]] = [this.tasks[target], this.tasks[index]];
  }
}
