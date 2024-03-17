import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { authGaurd } from '../auth/auth.gaurd';


const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [authGaurd]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
