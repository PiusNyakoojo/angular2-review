/*

	What we will learn
		- How to setup routes
		- Pass route parameters
		- Configure default routes
		- Setup subroutes

		- Imperative routing
			- Triggering a link in our code rather than through clicking a link
	

	[routerLink]="['NAME_OF_ROUTE', {arg0, arg1, ...}]"
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
				<li><a [routerLink]="['Component1', {}]">Component 1</a></li>
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
	{path: "/component-1", name: "Component1", component: Component1Component}
	{path: "/component-2", name: "Component1", component: Component2Component}
])

export class AppComponent {
	
}

//---------------- component1.component.ts ------------------------
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({ // notice that we didn't specify a selector
	template: `
		Component 1 Content!!!
	`
})

export class Component1Component {

}

//---------------- component2.component.ts ------------------------
import {Component} from "@angular/core";

@Component({ // notice that we didn't specify a selector
	template: `
		<h2>Component 2 Content!! :@</h2>
		
		<button (click)="onNavigate()">Take me to Component 1</button>
	`
})

export class Component2Component {

	// To navigate, we need to inject a router object

	constructor(private _router: Router) {

	}

	onNavigate() {
		this._router.navigate(['Component1']);
	}
}