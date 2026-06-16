import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  board: (string | null)[] = Array(9).fill(null);
  history: (string | null)[][] = [Array(9).fill(null)];
  step = 0;
  xNext = true;

  get winner(): string | null {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]];
    return lines
      .map(([a,b,c]) => this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c] ? this.board[a] : null)
      .find(Boolean) || null;
  }

  playSquare(index: number): void {
    if (this.board[index] || this.winner) return;
    const next = [...this.board];
    next[index] = this.xNext ? 'X' : 'O';
    this.history = [...this.history.slice(0, this.step + 1), next];
    this.step++;
    this.board = next;
    this.xNext = !this.xNext;
  }

  travel(amount: number): void {
    this.step += amount;
    this.board = [...this.history[this.step]];
    this.xNext = this.step % 2 === 0;
  }

  resetTicTacToe(): void {
    this.board = Array(9).fill(null);
    this.history = [[...this.board]];
    this.step = 0;
    this.xNext = true;
  }
}
