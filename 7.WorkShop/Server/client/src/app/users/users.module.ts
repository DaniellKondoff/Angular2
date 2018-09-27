import  {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from './user.service';

import {RegisterComponent } from './register.component';

@NgModule({
    declarations:[RegisterComponent],
    providers: [UsersService],
    imports:[FormsModule]
})
export class UsersModule{

}
