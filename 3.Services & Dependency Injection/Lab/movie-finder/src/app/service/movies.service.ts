import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  private apiKey :string = '0942e41acd7d6f554990daa0f91068fa';
  private path :string = 'https://api.themoviedb.org/3/';
  private popular :string = 'discover/movie?sort_by=popularity.desc';
  private theatres :string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  private auth :string = '&api_key=';

  constructor(private httpClient: HttpClient) { }

    getPopular() :Observable<Array<Movie>> {
    return this.httpClient.get<Array<Movie>>(this.path + this.popular + this.auth + this.apiKey);
  }

  getInTheatres() :Observable<Array<Movie>> {
    return this.httpClient.get<Array<Movie>>(this.path + this.theatres + this.auth + this.apiKey);
  }
}
