import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';
@Component({
  selector: 'app-read-component',
  templateUrl: './read-component.component.html',
  styleUrls: ['./read-component.component.css']
})
export class ReadComponentComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.courses = this.store.select(state => state.courses)
  }

}
