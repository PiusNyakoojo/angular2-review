/*
	This is an example of property binding to custom components (i.e. binding to a property of a child component)

	What we learn
		- Transferring data from our parent component to our child component
		- How to use an alias to name the property differently outside of our component
		- How to use the @Input decorator to expose our property to other components
		- Pass an array of the elements we want to expose by using the inputs property in our component decorator
*/

import {Component} from "angular2/core";
import {PropertyBindingComponent} from "./property-binding.component"

@Component({
	selector: "app",
	template: `
		<section class='parent'>
			<h2>This is the parent component</h2>

			<h4>Please enter your name</h4>
			<input type="text" [(ngModel)]="name" /><br /><br />
			

			<!-- Without using an Alias -->
			<section class='child'>
				<my-property-binding [name]="name"></my-property-binding>
			</section>

			<!-- Using and Alias
			<section class='child'>
				<my-property-binding [myName]="name"></my-property-binding>
			</section>
			-->
		</section>
	`,
	directives: [PropertyBindingComponent]
})

export class AppComponent {
	name = "";
}


// -------- property-binding.component.ts --------------
import {Component} from "angular2/core";
import {Input} from "angular2/core"; // When using the Input decorator, import Input from angular2/core

@Component({
	selector: "my-property-binding",
	template: `
		<h2>This is the child component</h2>
		<p>Hey {{name}}!</p>

	`,
	inputs: ['name']
	/*
		- This exposes the name property to be bound to by parent components using property binding!!!
		- The value in the string has to be the same as the property name bound by parent component i.e. [property_name]
		- Be careful when naming the properties and exposing them: What if "name" is already a property of angular 2?
		- That's why you should use an alias as follows
	*/
	// inputs: ['name:myName']
	/*
		- This means that name is the property "name" within our component but outside of our component, it will be called
			"myName"
	*/
})

export class PropertyBindingComponent {
	name = "";

	/*
		- Another way to declare inputs is using an Input decorator from angular2/core
		- In this way, we can set the alias by passing it to the decorator
	*/

	@Input("myAge") age = 20;
}