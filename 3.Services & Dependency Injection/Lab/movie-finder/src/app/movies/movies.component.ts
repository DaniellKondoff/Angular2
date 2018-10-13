import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular :Array<Movie>
  theaters :Array<Movie>
  kids : Movies
  bestDramas: Movies
  searchMovies: any
  isSearch: boolean
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getPopular()
    .subscribe(data => {
      this.popular = data;
    })

    this.movieService.getInTheatres()
                    .subscribe(data => {
                      this.theaters = data;
                    })
    
    this.movieService.getkidsMovie()
      .subscribe(
        data => {
          this.kids = data;
        }
      )
    
      this.movieService.getBestDramas()
      .subscribe(data => {
        this.bestDramas = data;
      })
  }

  search(myQuery) {
    this.movieService.getMovieByName(myQuery['search']).subscribe(data => {
      this.searchMovies = data;
      this.isSearch = true
    })
  }

}
