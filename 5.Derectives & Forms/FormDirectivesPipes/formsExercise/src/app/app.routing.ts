import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { AuthenticatedRoute } from './guards/authenticated-route.service';

const routes: Routes = [
    { path: 'home', component:  HomeComponent, canActivate: [AuthenticatedRoute]},
    { path: 'register', component: RegisterFormComponent},
    { path: 'login', component: LoginFormComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthenticatedRoute]
})
export class AppRoutesModule {

}