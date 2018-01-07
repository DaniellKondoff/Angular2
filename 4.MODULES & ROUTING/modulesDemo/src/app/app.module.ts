import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsersModule} from './uers/users.module';
import { AppRutesModule } from './routes.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRutesModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
