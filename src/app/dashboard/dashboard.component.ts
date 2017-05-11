import {Component} from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
    <div class="content">
        <div>
            <h1>Dashboard</h1>
            <div>
                {{content}}
            </div>
        </div>
    </div>
    `
})

export class DashboardComponent {
    content = 'This is the dashboard content';
    pageTitle = 'Dashboard';
}