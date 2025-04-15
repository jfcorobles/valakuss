import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DetailComponent } from './features/detail/detail.component';
import { AboutComponent } from './features/about/about.component';
import { RulesComponent } from './features/rules/rules.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'rules', component: RulesComponent },
    { path: '**', redirectTo: '' }
];
