/*

	Creating Custom Validators
	

	In order to add our own validators to an input field of a form, we need to use the Validators.compose()
	function and pass an array of validators we'd like to use
	
	this.myForm = this._formBuilder.group({
	'email': ['', Validators.compose([
		Validators.required,
		isValidEmail
	])],
	'password': ['', Validators.compose([
		Validators.required,
		hasNumbers
	])]
	});

	In Angular 2, when validators are functions that take a control object and return something if the validation
	failed. Otherwise, the validation is assumed to have succeeded.

*/

import {Component} from "@angular/core";
import {DataDrivenFormComponent} from "./custom-validator.ts";

@Component({
	selector: "my-app",
	template: `
		<my-data-driven></my-data-driven>
	`,
	directives: [DataDrivenFormComponent]
})

export class AppComponent {

}

//------------------ custom-validator.ts -----------------------

import {Component} from "@angular/core";
import {FormBuilder} from "@angular/common";
import {OnInit} from "@angular/core";
import {Validators} from "@angular/common";

@Component({
	selector: "my-data-driven",
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

export class DataDrivenFormComponent {
	myForm: ControlGroup;
	user = {email: '', password: ''};

	constructor(private _formBuilder: FormBuilder) {}

	ngOnInit() {
		this.myForm = this._formBuilder.group({
			'email': ['', Validators.required],
			'password': ['', Validators.compose([
				Validators.required,
				hasNumbers
			])],
			'confirmPassword': ['', Validators.required]
		});
	}

	onSubmit() {
		this.user = this.myForm.value; // becuase the value of the form is in the same structure as our user object
	}
}

/*
	Usually you would create this in another class file

	In angular 2, a validator works by returning a value only when the validation fails. Otherwise, if nothing
	is returned, then it is assumed that the input is valid.

	This particular function returns an object where the key is a string and the value is a boolean
*/

function hasNumbers(control: Control: {[s: string]: boolean}) {
	if (!control.value.match('\\d+')) {
		return {noNumbers: true}; // We aren't returning false because returning something already signifies that validation failed. So instead we just return some metadata describing what went wrong with validation.
	}
}