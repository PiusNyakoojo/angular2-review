/*

	Forms
		- Forms can be complex because we may want to
			- Create forms
			- Handle form submissions
			- Check the state of forms
			- Validate forms
			- and more

	Using a form is helpful to check and handle the validity of all the elements of the form rather than creating
	separate event handlers for each input for example.
	
	In Angular 2, a form is a type of ControlGroup
		- ControlGroup's hold individual Controls

	There are 2 major ways of creating forms in Angular 2
		- Template-driven approach
			- We structure the form in our html element of our component
			- Attach directives to recognize it as a form

		- Data-driven approach (also known as form building)
			- This allows you to create a form programmatically
			- The template just tells a form 

	ngForm not only allows us to ensure the validity of our form programmatically, but also within our template
*/

//----------------------- app.component.ts ---------------------------------

import {Component} from "@angular/core";
import {TemplateDrivenFormComponent} from "./template-driven-form.component"

@Component({
	selector: "my-app",
	template: `
		<my-template-form></my-template-form>
	`,
	directives: [TemplateDrivenFormComponent]
})

export class AppComponent {

}

//----------------------- template-driven-form.component.ts -------------------------------

import {Component} from "@angular/core";

@Component({
	selector: "my-template-form",
	template: `
		<!--
			By default, when angular 2 comes across a form element, it will attach an ngForm directive to that
			element.

			In order to access this form and check its validity, we have to tell angular 2 what the inputs for our
			form are. It's not the case that inputs within the form are implicitly added to the form.

			To allow angular 2 to recognize the inputs that are part of our form, we add the ngControl directive
			to each of the elements in our form that we want angular 2 to recognize as part of the form.

			"part of the form means" when we get to the overall value of the form, which will be a javascript object
			reflected in our inputs, when we're checking the overall validity of the form, only the inputs that have
			ngControl attached will be considered.

			ngSubmit is fired when the form is submitted.

			#f="ngForm" means we're binding this reference "f" to the ngForm directive which itself is a reference to
			the Control object of the form that we created.

			Then we pass the reference of the form to the onSubmit method.

			We can also use the ngForm directive not just on the form tag, but on the inputs of the form: for example:

			<input ngControl="email" type="text" id="email" #email="ngForm">
			In this case, angular 2 understands the context and in this case will give us only this single ngControl element.
			
			Setting the required directive in the form inputs also always angular 2 to create a validator function in the
			background for checking if the input is valid. Hence we can access the Control's valid property to determine
			if a field is valid

		-->
		<form (ngSubmit)="onSubmit(f)" #f="ngForm" >
			<div>
				<label for="email">Email</label>
				<input ngControl="email" type="text" id="email" required>
			</div>
			<div>
				<label for="password">Password</label>
				<input ngControl="password" type="text" id="password" required>
			</div>
			<div>
				<label for="confirm-password">Confirm Password</label>
				<input ngControl="confirm-password" type="text" id="confirm-password" required>
			</div>
			<button type="submit">Submit</button>
		</form>
	`
})

export class TemplateDrivenFormComponent {

	onSubmit(form) {
		console.log(form.value);
	}

}