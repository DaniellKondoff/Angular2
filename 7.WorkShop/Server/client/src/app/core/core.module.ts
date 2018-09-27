import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpService } from './http.service';

import {NavbarComponent} from './navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports:[
        CommonModule,
        RouterModule
    ],
    providers: [HttpService],
    exports: [NavbarComponent]
})
export class CoreModule{

}