/*
	Template-driven approach to creating forms

		- We create all the form validation within the form template itself.
		- We don't check or handle validity programmatically.

*/


import {Component} from "@angular/core";
import {TemplateDrivenFormComponent} from "./template-driven-form.component";

@Component({
	selector: "my-app",
	template: `
		<my-template-driven></my-template-driven>
	`,
	directives: [TemplateDrivenFormComponent]
})

export class AppComponent {

}

//--------------- template-driven-form.component.ts ------------------------------

import {Component} from "@angular/core";

@Component({
	selector: "my-template-driven",
	template: `
		<form #f="ngForm" (ngSubmit)="onSubmit()">
			<div>
				<label for="email">Email</label>
				<input ngControl="email" type="text" id="email" required #email="ngForm"> <!-- reference to the control of our form is passed into email variable -->
				<span class="validation-error" *ngIf="!email.valid">Not valid</span> <!-- email variable is used to ensure the validity of our form through the template rather than just programmatically -->
			</div>
			<div>
				<label for="password">Password</label>
				<input ngControl="password" type="text" id="password" required #password="ngForm">
				<span class="validation-error" *ngIf="!password.valid">Not valid</span>
			</div>
			<div>
				<label for="confirmPassword">Confirm Password</label>
				<input ngControl="confirmPassword" type="text" id="confirmPassword" required #confirmPassword="ngForm">
				<span class="validation-error" *ngIf="!confirmPassword.valid">Not valid</span>
			</div>
			<button type="submit" [disabled]="!f.valid || password.value !== confirmPassword.value" >Submit</button>
		</form>
		<h2>You submitted</h2>
		<div>Email: {{user.email}}</div>
		<div>Password: {{user.password}}</div>
	`
})

export class TemplateDrivenFormComponent {
	user = {email: '', password: ''};

	onSubmit(form) {
		this.user.email = form.value['email']; // one way of retrieving the value from a form
		this.user.password = form.controls['password'].value; // another way of retrieving the value from a form
	}
}