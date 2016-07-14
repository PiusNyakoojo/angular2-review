/*
	Attribute directives

	What we learn:
		- Attribute directives aren't necessarily enclosed in [] or () (i.e. ngControl)
		- Not that many default attribute directives are launched with angular2
		- Use the @Directive decorator to create a directive
			- use selector: "[attribute_name]" to set the attribute name 
		- Import Renderer's setElementStyle() instead of nativeElement.style to set the css of an element
			- This is a better approach because it is more optimized and safer
		- Use the host property to specify the events of the host element that you'd like to listen to
			- host: {
				"event_name": "myEventHandler()",
				"event_name1": "myEventHandler2()"
			}

*/

import {Component} from "angular2/core";
import {AttributeDirective} from "./attribute-directive.component";

@Component({
	selector: "app",
	template: `
		<!--
			Attribute directives
				- Not necessarily cloeed in [] or (). Hence, they don't necessarily need input or produce output
				- Attached to an HTML element
				- Not that many attribute directives are launched with angular 2

			Examples:
				- ngClass
				- ngStyle

			If you'd like to add a single class to an element, you can use

			<div [class.className]="true"></div>

			or

			<div [ngClass]="{className: true}"></div>

			To use ngStyle:

			<div [ngStyle]="{'color' : true}"></div>
		-->
	
		<section ngControl></section>


		<my-attribute-directive ></my-attribute-directive>
	`,
	directives: [AttributeDirective]
})

export class AppComponent { }

// ------------ attribute-directive.component.ts --------------------

import {Component} from "angular2/core";
import {Highlight} from "./highlight.directive";

@Component({
	selector: "my-attribute-directive",
	template: `
		<div myHighlight [highlightColor]="'red'">
			Highlight me!
		</div>

		<div myHighlight>
			Another Highlight
		</div>
	`,
	directives: [myHighlight]
})

export class AttributeDirective {}

// -------------- highlight.directive.ts ----------------------
import {Directive} from "angular2/core";
import {ElementRef} from "angular2/core"; // To retrieve a reference to the element this directive is attached to, we need to import the ElementRef class
import {OnInit} from "angular2/core"; // Called when the component (or in this case directive) is created
import {Renderer} from "angular2/core"; // Use the renderer to sefly style html elements

@Directive({
	selector: "[myHighlight]",
	inputs: ['highlightColor'],
	host: { // Specify which events the hosting element could fire that we want to listen to
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	}
})

export class HighlightDirective /* implements OnInit */ {
	private _defaultColor = 'green';
	highlightColor: string;

	/*
		To get a reference to the element that this directive is attached to, we will use angular 2's built in dependency
		injection.

		"constructor" is a typescript specific function and will compile to javascript to create a constructor that will
		automatically be executed when this class is created (i.e. when we attach it to an element in HTML).

	*/

	// Here we are injecting the reference to the element that this directive is attached to from the parent component

	constructor(private _elRef: ElementRef, private _renderer: Renderer) {

	}

	/*
	ngOnInit():any {

		This works fine but a more elegant way is to use the angular 2 renderer in the following code
		this._elRef.nativeElement.style.backgroundColor = this._defaultColor;


		The angular 2 renderer is like a helper object which allows us to change the style of html elements through
		the renderer.
		
		This is a better approach because it takes care of some things that could go wrong if we accessed the element
		through the "nativeElement" property of ElementRef


		this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", this.highlightColor || this._defaultColor);
	}
	*/

	onMouseEnter() {
		highlight(this.highlightColor || this._defaultColor);
	}

	onMouseLeave() {
		highlight(null);
	}

	private highlight(color: string) {
		this._renderer.setElementStyle(this._elRef.nativeElement, "background-color", color);
	}

}