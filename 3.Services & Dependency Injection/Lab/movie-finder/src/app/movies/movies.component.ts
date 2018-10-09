import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular :Object
  theaters :Object
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getPopular()
    .subscribe(data => {
      this.popular = data;
      console.log(data)
    })

    this.movieService.getInTheatres()
                    .subscribe(data => {
                      this.theaters = data;
                    })
  }

}
