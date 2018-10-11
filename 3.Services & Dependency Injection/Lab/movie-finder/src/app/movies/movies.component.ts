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
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getPopular()
    .subscribe(data => {
      this.popular = data;
      console.log(this.popular)
    })

    this.movieService.getInTheatres()
                    .subscribe(data => {
                      this.theaters = data;
                    })
  }

}
