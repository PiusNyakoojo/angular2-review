/*
	This is an example of event binding to custom components (i.e. binding to an event of a child component)

	What we learn
		- Transferring data from our child component to our parent component
		- $event is the default value passed from events by components in angular 2
		- To emit events, we need to import the EventEmitter and specify the type of event to emit
		- To allow outer components to listen to events, we place the name of the event emitter variable in an array that's passed to outputs in the Component decorator
		- We call event_property.emit(some_value) to emit an event from a component
		
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
			

			
			<!-- $event is the default value that angular passes with an event -->
			<section class='child'>
				<my-property-binding (hobbiesChanged)="hobbies = $event" ></my-property-binding>
			</section>

			<p>My hobbies are: {{hobbies}}</p>

		</section>
	`,
	directives: [PropertyBindingComponent]
})

export class AppComponent {
	hobbies = "";
}


// -------- property-binding.component.ts --------------
import {Component, EventEmitter} from "angular2/core";


@Component({
	selector: "my-property-binding",
	template: `
		<h2>This is the child component</h2>
		<p>Hey {{name}}!</p>

		<h4>My Hobbies are:</h4>
		<input type="text" (keyup)="onHobbiesChanged(inputField.value)" #inputField />

	`,
	outputs: ['hobbiesChanged']

	/*
		To allow angular 2 to know that you want components outside of this component to listen to events, we need to specify
		this information using the outputs property and passing an array of outputs we'd like to use
	*/
})

export class PropertyBindingComponent {

	hobbiesChanged = new EventEmitter<string>(); // EventEmitter is a generic type: it can return a value of any type

	onHobbiesChanged(hobbies: string) {
		this.hobbiesChanged.emit(hobbies);
	}
}