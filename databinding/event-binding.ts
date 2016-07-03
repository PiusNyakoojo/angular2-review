import {Component} from "angular2/core";

@Component({
	selector: "my-component",
	template: `
		<!--
			Databinding: Event Binding
				- Binding to a property of an element or a directive/component
				- Used to react to changes in our DOM
				- Information is flowing OUT of the DOM

			Syntax:

			(name_of_event) = "some_action()"
		-->

		<!--(1) Listening to default events (i.e. keyup, keydown, click, etc..) -->
		<input type="text" (keyup)="onKeyUp(inputElement.value)" #inputElement />
		<p>{{values}}</p>


		<!--(2) We can also listen to custom events -->
	`
})

export class MyComponent {
	myName = "Bob";
	values = '';

	onKeyUp(value: string) {
		this.values += value + ' | ';
	}
}
