import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent {
  infiniteItems = Array.from({ length: 20 }, (_, index) => index + 1);

  loadMore(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    if (target.scrollTop + target.clientHeight < target.scrollHeight - 30) return;
    const start = this.infiniteItems.length + 1;
    this.infiniteItems.push(...Array.from({ length: 20 }, (_, index) => start + index));
  }
}
