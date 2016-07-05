/*
	Custom Structural Directives

	What we learn:
		- set keyword
		- TemplateRef
		- ViewContainerRef

*/


import {Component} from "angular2/core";
import {StructuralDirectives} from "./structural.directives"

@Component({
	selector: "app",
	template: `
		<my-structural-directives></my-structural-directives>
	`,
	directives: [StructuralDirectives]
})

export class AppComponent {}


// --------- structural.directive.ts ----------------

import {Component} from "angular2/core";
import {UnlessDirective} from "./unless.directive.ts";

@Component({
	selector: 'my-structural-directives',
	template: `
		<h2>Custom Directive: *myUnless</h2>
		<div>
			Enter true or false
			<br />
			<input type="text" #condition (keyup)="0" />
		</div>
		<div *myUnless="condition.value != 'false'">
			Only shown if "false" was entered!
		</div>
	`,
	directives: [UnlessDirective]
})

export class StructuralDirectives {
	
}

// --------------- unless.directive.ts -----------------

import {Directive} from "angular2/core";
import {TemplateRef} from "angular2/core"; // TemplateRef is the code between the element that we're attaching our directive to
import {ViewContainerRef} from "angular2/core"; // ViewContainerRef references the element that our directive is within

@Directive({
	selector: '[myUnless]',
	inputs: ['myUnless']
})

export class UnlessDirective {

	/*
		<h2 *ourDirective>
			// TemplateRef is a reference to all the code in here..
		</h2>	

	*/

	constructor(private _templateRef: TemplateRef, private _viewContainerRef: ViewContainerRef) {

	}

	// Specify what happens when this input is set

	set myUnless(condition: boolean) { // condition is the value that's passed with *myDirective="some_condition"
		if (!condition) {
			this._viewContainerRef.createEmbeddedView(this._templateRef);
		} else {
			this._viewContainerRef.clear(); // make sure our element is empty and nothing is shown
		}
	}
}