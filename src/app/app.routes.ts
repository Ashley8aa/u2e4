import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';


export const routes: Routes = [
    { path: '', component: LandingComponent }, 
    { path: 'navbar', component: NavbarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'store', component: StoreComponent },
    { path: 'landing', component: LandingComponent },


    
];
