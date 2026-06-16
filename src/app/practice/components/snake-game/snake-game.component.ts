import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-practice-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnDestroy {
  readonly boardCells = Array.from({ length: 400 }, (_, index) => (
    { x: index % 20, y: Math.floor(index / 20) }
  ));
  snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }];
  direction = { x: 1, y: 0 };
  food = this.createFood();
  snakeOver = false;
  private snakeTimer?: ReturnType<typeof setInterval>;

  constructor() {
    this.startSnake();
  }

  ngOnDestroy(): void {
    clearInterval(this.snakeTimer);
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const directions: Record<string, {x: number; y: number}> = {
      ArrowUp: {x: 0, y: -1},
      ArrowDown: {x: 0, y: 1},
      ArrowLeft: {x: -1, y: 0},
      ArrowRight: {x: 1, y: 0}
    };
    if (!directions[event.key]) return;
    event.preventDefault();
    this.direction = directions[event.key];
  }

  restartSnake(): void {
    this.snake = [{x: 10, y: 10}, {x: 9, y: 10}];
    this.direction = {x: 1, y: 0};
    this.food = this.createFood();
    this.snakeOver = false;
  }

  isSnake(x: number, y: number): boolean {
    return this.snake.some(part => part.x === x && part.y === y);
  }

  private startSnake(): void {
    clearInterval(this.snakeTimer);
    this.snakeTimer = setInterval(() => {
      if (this.snakeOver) return;
      const head = { x: this.snake[0].x + this.direction.x, y: this.snake[0].y + this.direction.y };
      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || this.isSnake(head.x, head.y)) {
        this.snakeOver = true;
        return;
      }
      const ate = head.x === this.food.x && head.y === this.food.y;
      this.snake = [head, ...(ate ? this.snake : this.snake.slice(0, -1))];
      if (ate) this.food = this.createFood();
    }, 300);
  }

  private createFood(): {x: number; y: number} {
    return { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
  }
}
