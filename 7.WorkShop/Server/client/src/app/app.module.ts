import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './store';

import { CarRoutesModule } from './routes.module';

import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    CoreModule,
    CarRoutesModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>){
    this.ngRedux.provideStore(store);
  }
}
