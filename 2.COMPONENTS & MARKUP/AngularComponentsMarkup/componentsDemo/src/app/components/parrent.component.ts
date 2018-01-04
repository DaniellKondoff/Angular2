import { Component } from '@angular/core';

@Component({
    selector: 'parent',
    template: `
    <h1> Parrent </h1>
    <child 
    [fromParent]= 'titleForChildElement'
    (onSendingDataToParent) = 'dataReceived($event)'
    >
    </child>
    `
})

export class ParentComponent{
    titleForChildElement = 'My Parent Title';
    
    dataReceived(myData){
        alert(myData);
    }
}