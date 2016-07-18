/*

	What we will learn
		- How to setup routes
		- Pass route parameters
		- Pass optional parameters
		- Configure default routes
		- Setup subroutes
		- Routing lifecycle hooks
			- Handling routing events that are fired
				- Example: CanDeactive interface which contains the routerCanDeactive() method that will be called right before we navigate away from the current path

		- Imperative routing
			- Triggering a link in our code rather than through clicking a link
	
	The Angular 2 router is all about changing the state of your application. Based on the url, the application
	will serve a different component of your application. It parses the different parts of the URL by identifying
	what the url is composed of (i.e. child paths, queries, etc..). With the parsed URLs, angular 2 then tries
	to identify routes
	
	To view the latest router, go to overview2.ts


	[routerLink]="['NAME_OF_ROUTE', {arg0, arg1, ...}]"

	If the route takes a parameter:
	
		path: "/home/:some_param"

	It the component that handles the home route has its own routes (i.e. subroutes) then to tell angular 2 about this:

		path: "/home/:some_param/..."

	To pass optional parameters from one path to another

	[routerLink]="['Name_of_path', {optionalParam: some_data}]"
*/

//------------------- index.html -------------------------------
/*
	Place this in the head tag

	<base href="/">

	This makes sure that default directory from which to serve our application, is the root directory.

	This allows us to use that routing style in which when we change the URL we're not actually trying to
	open a subfolder or subdirectory or something like that.

	Make sure these files are imported:

	<script src="node_modules/angular2/bundles/router.dev.js"></script>
*/

//--------------------- boot.ts ---------------------------------
/*
	import {ROUTER_PROVIDERS} from "@angular/router"; // import the ROUTER_PROVIDERS service

	bootstrap(AppComponent, [ROUTER_PROVIDERS]); // Add ROUTER_PROVIDERS
	
*/

//------------------ app.component.ts ---------------------------
import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router";
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
	selector: "my-app",
	template: `
		
		<header>
			<ul>
				<li><a [routerLink]="['Home', {}]">Home</a></li>
				<li><a [routerLink]="['Component1', {source: 'AppComponent', optional: 'This is optional'}]">Component 1</a></li>
				<li><a [routerLink]="['Component2', {}]">Component 2</a></li>
			</ul>
		</header>



		<!--
			This is a component provided by angular 2 which will contain the main content that is changed
			when we navigate pages.

			In other words, this is where we will render the content of our route

			There can only be 1 router outless in a template file
		-->
		
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: "/", name: "Home", component: HomePageComponent, useAsDefault: true}, // useAsDefault will automatically re-route us to this page if no route path is specified
	{path: "/component-1/:source", name: "Component1", component: Component1Component}
	{path: "/component-2", name: "Component1", component: Component2Component}
])

export class AppComponent {
	
}

//---------------- component1.component.ts ------------------------
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {RouteParams} from "@angular/router";

@Component({ // notice that we didn't specify a selector
	template: `
		Component 1 Content!!!
		<div>Source is {{source}}</div>
		<div>Optional: {{optional}}</div>
	`
})

export class Component1Component implements OnInit {
	source: string;
	optional: string;

	constructor(private _routeParams: RouteParams) {}

	ngOnInit() {
		this.source = this._routeParams.get('source');
		this.optional = this._routeParams.get('optional');
	}
}

//---------------- component2.component.ts ------------------------
import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router";
import {Comp2MainComponent} from "./comp2-main.component";
import {Comp2SubComponent} from "./comp2-sub.component";


@Component({ // notice that we didn't specify a selector
	template: `
		<h2>Component 2 Content!! :@</h2>
		
		<button (click)="onNavigate()">Take me to Component 1</button>
		
		<div><a [routerLink]="['Component2Main']">Main</a></div>
		<div><a [routerLink]="['Component2Sub']">Sub</a></div>

		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig({
	{path: "/", name: "Component2Main", component: Comp2MainComponent, useAsDefault: true},
	{path: "/subroute", main: "Component2Sub", component: Comp2SubComponent}
})

export class Component2Component {

	// To navigate, we need to inject a router object

	constructor(private _router: Router) {}

	onNavigate() {
		this._router.navigate(['Component1', {source: 'Component 2'}]);
	}
}

//------------------ comp2-main.component.ts --------------------------
import {Component} from "@angular/core";
import {CanDeactivate, ComponentInstruction} from "@angular/router";


@Component({
	template: `

	`
})

export class Comp2MainComponent implements CanDeactive{


	/*
		nextInstruction is the instruction that should be performed if we want to navigate from this page
		prevInstruction is the instruction that we had before 
	*/
	routerCanDeactive(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction):any {

		/*
			We could use the nextInstruction to access the parameters we want to pass to the next page,
			access additional data, see a url, etc..
		*/

		/*
			return true; // allow user to navigate
			return false; // prevent user from navigating
			return alert("Are you sure you want to leave?");

		*/
	}
}

//------------------ comp2-sub.component.ts --------------------------
import {Component} from "@angular/core";

@Component({
	template: `

	`
})

export class Comp2SubComponent {
	
}