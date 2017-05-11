import {Component} from '@angular/core';

@Component({
    selector: 'library',
    template: `
        <div class="content">
            <div>
                <h1>Library</h1>
                <div>
                    {{content}}
                </div>
            </div>
        </div>
    `
})

export class LibraryComponent {
    content = 'This is the library content';
    pageTitle = 'Library';
}