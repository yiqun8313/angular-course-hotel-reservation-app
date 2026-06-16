import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-practice-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnDestroy {
  autocomplete = '';
  suggestions: string[] = [];
  private autocompleteTimer?: ReturnType<typeof setTimeout>;
  private readonly technologies = ['react', 'redux', 'router', 'vue', 'angular', 'node', 'next'];

  ngOnDestroy(): void {
    clearTimeout(this.autocompleteTimer);
  }

  updateAutocomplete(): void {
    clearTimeout(this.autocompleteTimer);
    this.autocompleteTimer = setTimeout(() => {
      const value = this.autocomplete.trim().toLowerCase();
      this.suggestions = value ? this.technologies.filter(item => item.includes(value)) : [];
    }, 300);
  }

  selectSuggestion(value: string): void {
    this.autocomplete = value;
    this.suggestions = [];
  }
}
