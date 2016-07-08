/*

	What we will learn
		- How to setup routes
		- Pass route parameters
		- Configure default routes
		- Setup subroutes
		- 

*/

//------------------- index.html -------------------------------
/*
	Place this in the head tag

	<base href="/">

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

@Component({
	selector: "my-app",
	template: `

		<!--
			This is a component provided by angular 2 which will contain the main content that is changed
			when we navigate pages.

			In other words, this is where we will render the content of our route
		-->

		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: "/component-1", name: "Component1", component: Component1Component}
])

export class AppComponent {
	
}

//---------------- component1.component.ts ------------------------
import {Component} from "@angular/core";

@Component({ // notice that we didn't specify a selector
	template: `

	`
})

export class Component1Component {

}

//---------------- component1.component.ts ------------------------
import {Component} from "@angular/core";

@Component({ // notice that we didn't specify a selector
	template: `

	`
})

export class Component2Component {
	
}