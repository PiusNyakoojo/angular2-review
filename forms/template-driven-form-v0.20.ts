/*
	As of version 0.2.0 of the Angular 2 form:

	In order to register an input as a control or important aspect of our form, we use the ngModel directive and provide a name
	in the tag:

	<input type="text"
			class="form-control"
			id="email"
			ngModel
			name="email">

	Also notice that we don't specify the action attribute to the form.. this is because we don't want to send the form data
	to a server. Instead, we use the ngSubmit directive and use event binding to listen and handle an event being submitted.

	The form tag kind of acts as a selector for the ngForm directive. So the ngForm directive gets placed on the form automatically.
	Well the ngForm directive exports its result as ngForm.. Which means it basically gives us the result that it manages. So
	we can access the form that's automatically created for us by setting a local variable selector on the tag to the ngForm
	that's exposed to us.

	To make a field required, add the required attribute to the tag.

*/

import { NgForm } from '@angular/forms';

@Component({
	//...
	template: `
		<form (ngSubmit)="onSubmit(f)" #f="ngForm">
			<div>
				<label for="username">Username</label>
				<input type="text"
						class="form-control"
						id="username"
						ngModel
						name="username"
						required>
			</div>
			<div>
				<label for="email">Email</label>
				<input type="text"
						class="form-control"
						id="email"
						ngModel
						name="email"
						required>
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password"
						class="form-control"
						id="password"
						ngModel
						name="password"
						required>
			</div>
			<button type="submit">Submit</button>
		</form>
	`
})

export class WhateverComponent {

	onSubmit(form: NgForm) {

	}
}