import {Component} from '@angular/core';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
    selector: 'app',
    template: `
        <header>
            <div class="brand">Shopping List</div>
        </header>
        <div>
            <shopping-list></shopping-list>
        </div>
    `,
    directives: [ShoppingListComponent]
})

export class AppComponent {

}