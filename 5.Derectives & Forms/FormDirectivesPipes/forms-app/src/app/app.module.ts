import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TestPipePipe } from './pipes/test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveLoginComponent,
    HighlightDirective,
    TestPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
