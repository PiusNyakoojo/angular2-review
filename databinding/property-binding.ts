import {Component} from "angular2/core";

@Component({
	selector: "my-component",
	template: `
		<!--
			Databinding: Property Binding
				- Binding to a property of an element or a directive/component
				- Used to set data in a property of an element

			Syntax:

			[property_name] = "some_value_or_variable_name"
		-->
		

		<!--(1) Binding to the property of an element -->

		<h1 [innerHTML]="2 === 2">false</h1> <!-- true -->
		<input type="text" [value]="myName" />
		<textarea [disabled]="1 === 1"></textarea> <!-- disabled -->


		<!--(2) Binding to the property of a directive (Note: ngClass isn't a property of html elements. It's a directive angular 2 ships with-->
		<input type="text" [ngClass]="{ my-css-class: true }" />


		<!--(3) Another directive is ngControl; but we wouldn't set [ngControl] since ngControl doesn't take any inputs; property binding only applies when we want to pass information to the directive or element -->
		<input type="text" ngControl />


		<!--(4) Porperty binding with custom components -->
		<my-second-component [theValue]="someInfo"></my-second-component>
		
	`
})

export class MyComponent {
	myName = "Bob";
}
