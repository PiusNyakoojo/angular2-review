import {Component} from "angular2/core";

@Component({
	selector: "my-component",
	template: `
		<!-- 
			Databinding: String interpolation
				- Used to bind information that can be converted into a string (i.e. string, int, boolean, and more)
				- Replaces test within {{}} and writes it to the DOM (Document Object Model)

			Syntax:

			{{ some_value_or_variable_name }}
		-->
		

		{{ 'Hey' }}

		{{ 1 === 1 }}

		{{ myName }}

		{{ onTest() }}

		<input type="text" value="{{ myName }}" class="{{ 'my-css-class' }}" />

		We can also check if a value is set before trying to access its properties. For example:

		{{person.name}}

		person might not be set so this would "break" our application.. to only allow this to use
		person if it's set we can do this:

		{{person?.name}}


	`
})

export class MyComponent {
	myName = "Bob";

	onTest() {
		return 1 !== 1;
	}
}
