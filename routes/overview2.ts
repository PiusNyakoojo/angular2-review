/*
	This overview contains information pertaining to the latest Angular 2 Router as of version RC 3.0.0-beta.2
	

	instead of <a href="/user">User stuff</a>

	we should use <a [routerLink]="['user']">User stuff</a>

	'user' will indicate to angular 2 that we should navigate to the user path relative to the current path
	'/user' will indiciate that we should navigate to the absolute path that's called user
	'../' will navigate up 1 component and go to the root path.. so the root component will be presented

	When routing, we need to use the a tag rather than div or something else because angular 2 will do some
	background processing for us.

	Routing through code (imperative routing) can be done as follows:

	In the template lets say you have a button and you're listening to the click event
	<button (click)="onNavigate()">Go Home</button>

	Inject the angular 2 router from @angular/router and use the navigate method to go to the specified path:

	constructor(private router: Router){}

	onNavigate() {
		this.router.navigate(['/']);
	}


	Router parameters::::::::::::::::::::::::::::

	const APP_ROUTES = [
		{ path: "user/:id", component: HomeComponent }
	];

	/:id is how we add parameters to our routes

	To pass the parameter from our routerLink we add it to the array..

	[routerLink]="['/user', "1234"]"

	In order to retrieve the parameter from the router, we can use 2 methods
	- The first method will allow us to retrieve a snapshot of the parameter and therefore we can't
		dynamically change the component based on chaning the route parameter because angular 2 is
		efficient when handling routing. Rather than destroying and recreating a certain component for
		the route, it will just reuse it.

		import { ActivatedRoute } from '@angular/router';

		export class UserComponent {
			id: string;

			constructor(private activatedRoute: ActivatedRoute) {
				this.id = this.activatedRouter.snapshot.params['id'];
			}
		}
	
	- The second method uses observables. In this way we are able to listen to changes of the route and
		handle the change accordingly.

		import { ActivatedRoute } from '@angular/router';

		export class UserComponent {
			id: string;

			constructor(private activatedRoute: ActivatedRoute) {
				activatedRoute.params.subscribe(
					(param: any) => this.id = param['id']
				);
			}
		}


		Now when we subscribe to this object of params, we listen to changes and respond to those changes.
		But when the component is destroyed, the subscription actually lives on.. So this will result in 
		a memory leak.. To handle this, we unsubscribe when the component is destroyed.
		
		import { OnDestroy } from '@angular/core';
		import { ActivatedRoute } from '@angular/router';
		import { Subscription } from 'rxjs/Rx';

		export class UserComponent implements OnDestroy {
			private subscription: Subscription;
			id: string;


			constructor(private activatedRoute: ActivatedRoute) {
				this.subscription = activatedRoute.params.subscribe(
					(param: any) => this.id = param['id']
				);
			}

			ngOnDestroy() {
				this.subscription.unsubscribe();
			}
		}


		You should probably use this method by default unless you know that the first method is what your
		application needs.

		


*/

/* src/app/app.routes.ts */
import { provideRouter } from '@angular/router';

const APP_ROUTES = [
	{ path: '', component: HomeComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'details', component: DetailsComponent }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES);
];


/* src/main.ts ---- this is the boostrap file */

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

import { APP_ROUTES_PROVIDER } from './app/app.routes';


if ( environment.production ) {
	enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTES_PROVIDER]);

/* src/app/app.component.ts ------- this is the main app component */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'app-root',
	template: `
		<!-- this is where the router components will be displayed
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }