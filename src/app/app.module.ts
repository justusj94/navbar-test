import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LibraryComponent }     from './library/library.component';
import { NavigationComponent }  from './navigation/navigation.component';
import { LoginComponent }       from './login/login.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        LibraryComponent,
        NavigationComponent,
        LoginComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
