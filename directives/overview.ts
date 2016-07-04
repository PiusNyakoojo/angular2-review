import {Component} from "angular2/core";

@Component({
	selector: "my-component",
	template: `
		<!--
			Directives are instructions in the HTML code which will tell angular 2 how to manipulate the document at the point where it encounters this directive
				- Summary: Directives are instructions we add to an element to change it in some way
				- Directives direct!

			3 Types of directives
				- Attribute directives (i.e. ngClass, ngStyle)
					- They look like attributes of elements and can be bound to with property, event or 2-way binding
					- Not necessarily enclosed in [] or (). Hence, they don't necessarily need input or produce output

				- Components (i.e. a custom directive component)

				- Structural directives (i.e. *ngFor, *ngIf)
					- *DIRECTIVENAME

		-->
	`
})

export class MyComponent { }
