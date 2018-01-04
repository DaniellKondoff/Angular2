import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    template: `
    <button (click)='changeListState()'>{{buttonText}} List </button>
    <ul *ngIf = 'showList'>
        <li *ngFor = 'let number of numbers'>
        {{number}}
        </li>
    </ul>
    `
})
export class ListComponent implements OnInit{
    numbers = [1, 2, 3, 4, 5, 6];
    showList = true;
    buttonText = 'Hide'

    ngOnInit () {
        console.log('Created!');
    }

    changeListState(){
        this.showList = !this.showList

        if(this.showList){
            this.buttonText = 'Hide';
        } 
        else{
            this.buttonText = 'Show';
        }
    }
}