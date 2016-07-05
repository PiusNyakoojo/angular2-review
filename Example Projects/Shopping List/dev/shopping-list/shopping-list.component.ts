import {Component} from "@angular/core";
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ListItem} from "./list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";

@Component({
    selector: "shopping-list",
    template: `
        <section>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">   
                <ul>
                    <li *ngFor="let item of listItems" (click)="onSelect(item)"> 
                        {{item.name}} ({{item.amount}})
                    </li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">   
            <shopping-list-item [item]="selectedItem" (itemDeleted)="onItemDeleted($event)" ></shopping-list-item>
        </section>

    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent]
})

export class ShoppingListComponent {
    listItems = new Array<ListItem>();
    selectedItem: ListItem;

    onSelect(item: ListItem) {
        this.selectedItem = item;
    }

    onItemAdded(item: ListItem) {
        this.listItems.push({name: item.name, amount: item.amount});
    }

    onItemDeleted(item: ListItem) {
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    }
}                           