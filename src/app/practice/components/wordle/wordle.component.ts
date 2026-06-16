import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css']
})
export class WordleComponent {
  wordValue = '';
  guesses: string[] = [];
  wordWon = false;
  readonly answer = 'APPLE';

  submitWord(): void {
    const value = this.wordValue.toUpperCase();
    if (value.length !== 5 || this.wordWon || this.guesses.length >= 5) return;
    this.guesses.push(value);
    this.wordWon = value === this.answer;
    this.wordValue = '';
  }

  wordColor(letter: string, index: number): string {
    return this.answer[index] === letter ? 'green' : this.answer.includes(letter) ? '#d4a017' : '#b91c1c';
  }

  resetWord(): void {
    this.guesses = [];
    this.wordWon = false;
    this.wordValue = '';
  }
}
