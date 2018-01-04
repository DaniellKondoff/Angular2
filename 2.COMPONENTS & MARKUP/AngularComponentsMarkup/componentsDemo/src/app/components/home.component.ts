import { Component } from '@angular/core';
import {Titles } from './titles';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
    selector:'home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
    titles = new Titles(
        'My beautiful title',
        'This is second title'
    );
}