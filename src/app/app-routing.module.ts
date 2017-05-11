import { NgModule }             from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LibraryComponent }     from  './library/library.component';
import { LoginComponent }       from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'library', component: LibraryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}