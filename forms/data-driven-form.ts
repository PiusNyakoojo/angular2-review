/*
	Data-driven approach (also known as Model-driven approach)
		- Form validation is more configuarable; instead of allowing angular 2 to create the ControlGroup
			we create it ourselves and have more control
		- The form is created programmatically

	To build the form programmatically, we'll need to use FormBuilder.. which is a service we can inject into our
	component.
	
	Validators is an object in Angular 2 that has predefined validator functions to validate our input fields.

	When creating a ControlGroup we need to pass a JSON object of the id's of our input fields mapping to an
	array of the initial value of our input and the validation type

	this.myForm = this._formBuilder.group({
		'email': ['', Validator.required],
		'password': ['', Validator.required]
	});

	To ensure that angular 2 isn't using the default template driven approach of creating an ngForm ControlGroup reference
	we need to bind to the ngFormModel directive and pass it the form that we're using the the ControlGroup programmatically.

	[ngFormModel]="myForm"

	This overrides the template-driven default approach that angular 2 provides when creating a form.

	Next we match up the input controls to our programmatically created control references

	[ngFormControl]="myForm.controls['email']"
*/

import {Component} from "@angular/core";
import {DataDrivenFormComponent} from "./data-driven-form";

@Component({
	selector: "my-app",
	template: `
		<my-data-driven></my-data-driven>
	`,
	directives: [DataDrivenFormComponent]
})

export class AppComponent {

}


//----------------- data-driven-form.ts --------------------------
import {Component} from "@angular/core";
import {FormBuilder} from "@angular/common";
import {OnInit} from "@angular/core";
import {Validators} from "@angular/common";

@Component({
	selector: "my-driven-form",
	template: `
		<form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" >
			<div>
				<label for="email">Email</label>
				<input [ngFormControl]="myForm.controls['email']" type="text" id="email" #email="ngForm">
				<span class="validation-error" *ngIf="!email.valid">Not valid</span>
			</div>
			<div>
				<label for="password">Password</label>
				<input [ngFormControl]="myForm.controls['password']" type="text" id="password" #password="ngForm">
				<span class="validation-error" *ngIf="!password.valid">Not valid</span>
			</div>
			<div>
				<label for="confirm-password">Confirm Password</label>
				<input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirm-password" #confirmPassword="ngForm">
				<span class="validation-error" *ngIf="!conFirmPassword.valid">Not valid</span>
			</div>
			<button type="submit">Submit</button>
		</form>
		<h2>You Submitted</h2>
		<div>Mail: {{user.email}}</div>
		<div>Password: {{user.password}}</div>
	`
})

export class DataDrivenFormComponent implements OnInit {
	myForm: ControlGroup;
	user = {email: '', password: ''};

	constructor(private _formBuilder: FormBuilder) {}

	ngOnInit() {
		this.myForm = this._formBuilder.group({
			'email': ['', Validators.required],
			'password': ['', Validators.required],
			'confirmPassword': ['', Validators.required]
		});
	}

	onSubmit() {
		this.user = this.myForm.value; // becuase the value of the form is in the same structure as our user object
	}
}