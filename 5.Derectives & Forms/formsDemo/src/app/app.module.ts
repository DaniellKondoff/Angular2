import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarFormComponent } from './cars/car-form.component';
import { TextColorDirective } from './cars/textcolor-directive';
import { MultiplicationPipe } from './multiplication.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    TextColorDirective,
    MultiplicationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
