import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses/course.component';
import { CourseListComponent } from './courses/course-list.component';
import { CourseActions } from './courses/course.actions';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoryService } from '../api/in-memory-story.service';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule }   from '@angular/router';
import { FilterTextComponent, FilterService } from './blocks/filter-text';
import { ToastComponent, ToastService } from './blocks/toast';
import { SpinnerComponent, SpinnerService } from './blocks/spinner';
import { ModalComponent, ModalService } from './blocks/modal';
import { ExceptionService } from './blocks/exception.service';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import {IAppState } from './store/IAppState';
import { store } from './store/index';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    FilterTextComponent,
    ToastComponent,
    SpinnerComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStoryService, { delay: 500 }),
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    ToastService,
    SpinnerService,
    ModalService,
    ExceptionService,
    CourseActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.provideStore(store);
  }
}
