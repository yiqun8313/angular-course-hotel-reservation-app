import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PracticeLabComponent } from './practice-lab.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChatUiComponent } from './components/chat-ui/chat-ui.component';
import { ClickOrderBoxesComponent } from './components/click-order-boxes/click-order-boxes.component';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { MemoryGameComponent } from './components/memory-game/memory-game.component';
import { ModalToastComponent } from './components/modal-toast/modal-toast.component';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';
import { NestedCommentsComponent } from './components/nested-comments/nested-comments.component';
import { OtpInputComponent } from './components/otp-input/otp-input.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SnakeGameComponent } from './components/snake-game/snake-game.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { TimerComponent } from './components/timer/timer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TrafficLightsComponent } from './components/traffic-lights/traffic-lights.component';
import { VirtualListComponent } from './components/virtual-list/virtual-list.component';
import { WordleComponent } from './components/wordle/wordle.component';

@NgModule({
  declarations: [
    PracticeLabComponent,
    AccordionComponent,
    AutocompleteComponent,
    CalendarComponent,
    CarouselComponent,
    ChatUiComponent,
    ClickOrderBoxesComponent,
    DropdownListComponent,
    FileExplorerComponent,
    InfiniteScrollComponent,
    MemoryGameComponent,
    ModalToastComponent,
    MultiSelectDropdownComponent,
    NestedCommentsComponent,
    OtpInputComponent,
    PaginationComponent,
    ProgressBarComponent,
    SearchBoxComponent,
    SnakeGameComponent,
    StarRatingComponent,
    TabsComponent,
    TicTacToeComponent,
    TimerComponent,
    TodoListComponent,
    TrafficLightsComponent,
    VirtualListComponent,
    WordleComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [PracticeLabComponent]
})
export class PracticeModule {}
