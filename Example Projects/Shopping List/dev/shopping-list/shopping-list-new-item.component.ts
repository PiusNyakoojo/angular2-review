import {Component, OnInit} from "@angular/core";
import {ListItem} from "./list-item";
import {ShoppingListService} from "./shopping-list.service";
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";


@Component({
    selector: "shopping-list-new-item",
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" >
            <div class="input">   
                <label for="item-name">Name</label>
                <input [ngFormControl]="myForm.controls['name']" type="text" id="item-name" [(ngModel)]="item.name" #itemName="ngForm">
                <span *ngIf="!itemName.valid">Not valid</span>
            </div>
            <div class="input">   
                <label for="item-amt">Amount</label>
                <input [ngFormControl]="myForm.controls['amount']" type="text" id="item-amt" [(ngModel)]="item.amount" #itemAmount="ngForm">
                <span *ngIf="!itemAmount.valid">Not valid</span>
            </div>
            <button type="submit" [disabled]="!myForm.valid" >Add Item</button>
        </form>
        
    `,
    outputs: ['itemAdded']
})

export class ShoppingListNewItemComponent implements OnInit{
    item = {name: '', amount: 0};
    myForm: ControlGroup;
    
    constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {
        
    }

    ngOnInit() {
        this.myForm = this._formBuilder.group({
            'name': ['', Validators.required],
            'amount': ['', Validators.compose([
                Validators.required,
                greaterZero
            ])]
        });
    }
    
    onSubmit() {
        this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
    }
}

function greaterZero(control: Control): {[s: string], boolean} {
    if (control.value <= 0) {
        return {notEnough: true};
    }
}