import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { store, filterCourses } from '../store';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  filteredCourses = [];

  constructor() {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourses(searchText))
  }


  updateFromStore(){
    const state = store.getState();
    this.filteredCourses = state.filteredCourses;
  }

  ngOnInit() {
    this.updateFromStore();
    store.subscribe(() => {
      this.updateFromStore();
    })
    componentHandler.upgradeDom();
  }
}
