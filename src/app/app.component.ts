// import { NgFor, NgIf } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone : true,
//   imports: [RouterOutlet,NgIf,NgFor],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Movie-App_Angular';
//   searchItem: string = '';
//   movies: any[] = [];
//   private readonly apiUrl = 'Https;//example.com'
//   constructor(private readonly http: HttpClient) {
//     this.searchMovies('Batman');
//   }
//   searchMovies(title: string): void{
//     this.http.get<any>(`${this.apiUrl}&s=${title}`).subscribe((response =>{
//       this.movies = response.Search || [];
//     }));
//   }
//   onSearch(): void{
//     if (this.searchItem){
//       this.searchMovies(this.searchItem);
//   }
// }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
})
export class AppComponent {
  searchTerm: string = '';
  movies: any[] = [
    {
      Title: 'Inception',
      Type: 'Movie',
      Poster: 'https://via.placeholder.com/400',
    },
    {
      Title: 'Interstellar',
      Type: 'Movie',
      Poster: 'https://via.placeholder.com/400',
    },
    {
      Title: 'The Dark Knight',
      Type: 'Movie',
      Poster: 'https://via.placeholder.com/400',
    },
    {
      Title: 'The Matrix',
      Type: 'Movie',
      Poster: 'https://via.placeholder.com/400',
    },
    {
      Title: 'Batman vs Superman: Dawn Of Justice',
      Type: 'Movie',
      Poster: 'https://via.placeholder.com/400',
    }
  ];

  onSearch() {
    console.log('Search initiated for:', this.searchTerm);
  }
}
