import {Component, OnInit} from "@angular/core";
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ListItem} from "./list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";
import {ShoppingListService} from "./shopping-list.service";
import {FilterPipe} from "./filter.pipe";

@Component({
    selector: "shopping-list",
    template: `
        <section>
            <shopping-list-new-item ></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            Filter:
            <input type="text" #filter (keyup)="0" />
            <div class="list">   
                <ul>
                    <li *ngFor="let item of listItems | myFilter:filter.value" (click)="onSelect(item)"> 
                        {{item.name}} ({{item.amount}})
                    </li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">   
            <shopping-list-item [item]="selectedItem" (removed)="onItemRemoved()" ></shopping-list-item>
        </section>

    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
    providers: [ShoppingListService],
    pipes: [FilterPipe]
})

export class ShoppingListComponent implements OnInit {
    listItems: Array<ListItem>;
    selectedItem: ListItem;
    
    constructor(private _shoppingListService: ShoppingListService) {
        
    }


    ngOnInit() {
        this.listItems = this._shoppingListService.getItems();
    }

    onSelect(item: ListItem) {
        this.selectedItem = item;
    }

    onItemRemoved() {
        this.selectedItem = null;
    }
}                           