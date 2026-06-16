import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface FilmView {
  title: string;
  year: string;
}

@Component({
  selector: 'app-star-wars-films',
  templateUrl: './star-wars-films.component.html',
  styleUrls: ['./star-wars-films.component.css']
})
export class StarWarsFilmsComponent {

  characterName = 'Luke Skywalker';
  films: FilmView[] = [];
  errorMessage = '';
  isLoading = false;

  constructor(private http: HttpClient) {}

  searchFilms() {
    const name = this.characterName.trim();

    if (!name) {
      this.errorMessage = 'Character name is required.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.films = [];
    this.http.get<any>(`https://swapi.info/api/people/`)
      .subscribe({
        next: response => {
          console.log(response);

          const characters = response
          const character = characters.find((item: any) =>
            item.name.toLowerCase().includes(name.toLowerCase())
          );

          if (!character) {
            this.errorMessage = `No character found for "${name}".`;
            this.isLoading = false;
            return;
          }

          character.films.forEach((url: string) => {
            this.http.get<any>(url).subscribe({
              next: film => {
                this.films.push({
                  title: film.title,
                  year: new Date(film.release_date).getFullYear().toString()
                });

                if (this.films.length === character.films.length) {
                  this.isLoading = false;
                }
              },
              error: () => {
                this.errorMessage = 'Unable to load films. Please try again.';
                this.isLoading = false;
              }
            });
          });
        },
        error: (error) => {
          console.log('people api error', error);
          this.errorMessage = 'Unable to load character. Please try again.';
          this.isLoading = false;
        }
      });
  }
}



//图片压缩

// 懒加载

// 使用 WebP

// CDN

// 字体按需加载