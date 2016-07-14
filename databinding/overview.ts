import {Component} from "angular2/core";

@Component({
	selector: "my-component",
	template: `
		<!-- 4 forms of Data Binding -->
		

		<!--(a) String interpolation -->
		{{ myName }}


		<!--(b) Property binding (updating a value in an element -- send something to an element) -->
		<h1 [ngClass]="{ className0: true, className1: myName ? true : false }"></h1>


		<!--(c) Event binding (reacting to user input -- retrieve something from an element) -->
		<input #inputField (keyup)="myName = inputField.value" type="text">


		<!--(d) 2-way databinding (this used to be the default in Angular 1) -->
		<input [(ngModel)]="myName" type="text" />
	`
})

export class MyComponent {
	myName = "Bob";
}
