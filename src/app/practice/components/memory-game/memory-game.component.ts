import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent {
  cards = this.shuffle(['A', 'B', 'C', 'A', 'B', 'C']);
  flipped: number[] = [];
  matched: number[] = [];

  showCard(index: number): boolean {
    return this.flipped.includes(index) || this.matched.includes(index);
  }

  flipCard(index: number): void {
    if (this.flipped.length === 2 || this.showCard(index)) return;
    this.flipped = [...this.flipped, index];
    if (this.flipped.length !== 2) return;
    const [a, b] = this.flipped;
    if (this.cards[a] === this.cards[b]) {
      this.matched = [...this.matched, a, b];
      this.flipped = [];
    } else {
      setTimeout(() => this.flipped = [], 600);
    }
  }

  resetGame(): void {
    this.cards = this.shuffle(['A', 'B', 'C', 'A', 'B', 'C']);
    this.flipped = [];
    this.matched = [];
  }

  private shuffle<T>(items: T[]): T[] {
    return [...items].sort(() => Math.random() - 0.5);
  }
}
