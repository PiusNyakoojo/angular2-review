import {Component} from '@angular/core';
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
        </div>
        
        <div class="container">
            <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent];
})

export class AppComponent {
    myself = {name: '', age: ''};
    confirmedMyself = {name: '', age: ''};

    onConfirm(myself: {name: string, age: string}) {
        //this.confirmedMyself = myself; // updates automatically across 2-way-binding
        this.confirmedMyself = {name: myself.name, age: myself.age}; // doesn't update across 2-way-binding
    }

    onSubmit(myself: {name: string, age: string}) {
        //this.myself = myself;
        this.myself = {name: myself.name, age: myself.age};
    }
}