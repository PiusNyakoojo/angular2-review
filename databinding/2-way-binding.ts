import {Component} from "angular2/core";

@Component({
	selector: "my-component",
	template: `
		<!--
			2-Way Data Binding
				- Data flows both from our element and into our element
			
			Syntax:

			[(ngModel)] = "name_of_variable_to_read_and_write_from"
		-->

		<!--(1) We can't bind a property like value because that's not built into the html element; we use ngModel which is an angular 2 directive that handles 2-way data binding -->
		
		<input type="text" [(value)]="myName" /> <!-- WRONG -->

		<input type="text" [(ngModel)]="myName" /> <!-- RIGHT -->

	`
})

export class MyComponent {
	myName = "Bob";
}
