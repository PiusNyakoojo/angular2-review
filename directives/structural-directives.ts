/*
	Structural directives

	What we learn:
		- Structural directives don't really transform the element they're attached to but rather change the whole 
			structure of our element in a certain way
		- For example, the *ngFor directive allows us to loop through an array
		- Another example, the *ngIf will only display an element if a certain condition is met
		- Another example, is the [ngSwitch]
	

	If you want to access the index of the current item in an ngFor you can do this:
	
	*ngFor="let item of items; let i = index"

	index is a keyword angular 2 recognizes and is the index of the current item.

	<ul>
		<li *ngFor="let item of items">{{item}} - (Index: {{i}})</li>
	</ul>

	When using ngSwitch this is how to specify conditions:

	<div [ngSwitch]="10">
		<p *ngSwitchCase="10">10</p>
		<p *ngSwitchCase="20">20</p>
		<p *ngSwitchCase="30">30</p>
		<p *ngSwitchDefault>Default</p>
	</div>

	In this example, the first case will be shown: <p *ngSwitchCase="10">10</p>


	You might be wondering why we use * in front of the directive for ngIf, ngFor and ngSwitchCase.

	Well, angular 2 de-sugars these directives behind the scenes. So when we write code like this:

	<div *ngIf="true">Conditional text</div>

	Angular 2 actually converts this to :

	<template [ngIf]="true">
		<div>
			Conditional text
		</div>
	</template>

	behind the scenes. So all the content in the template will be rendered if the condition is satisfied.
	Else, it won't be rendered.

	
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

@Component({
	selector: 'my-structural-directives',
	template: `

		<!-- Example of ngIf -->

		<section class="directive">
			<h2>*ngIf</h2>
			<div>
				Enter a number higher than 10
				<br />
				<input type="text" #number (keyup)=0 />
			</div>
			<div *ngIf="number.value > 10">
				Number is greater than 10
			</div>
		</section>


		<!-- Example of ngFor -->

		<section>
			<h2>*ngFor</h2>
			<div>
				<ul>
					<li *ngFor="let item of list, #i = index">{{item + ": " + i}}</li>
				</ul>
			</div>
		</section>

		<!-- Example of ngSwitch -->

		<section>
			<h2>[ngSwitch]</h2>
			<div>
				Enter red, blue or green
				<br />
				<input type="text" #color (keyup)=0 />
			</div>
			<div [ngSwitch]="color.value">
				<template [ngSwitchWhen]="'red'"><span style="color: red">Color is Red</span></template>
				<template [ngSwitchWhen]="'blue'"><span style="color: blue">Color is Blue</span></template>
				<template [ngSwitchWhen]="'green'"><span style="color: green">Color is Green</span></template>
				<template ngSwitchDefault><span>Don't know that color</span></template>
			</div>
		</section>
	`
})

export class StructuralDirectives {
	list = ['Apple', 'Milk', 'Bread'];
}