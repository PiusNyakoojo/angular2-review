/*
	This overview contains information pertaining to the latest Angular 2 Router as of version RC 3.0.0-beta.2
	

	instead of <a href="/user">User stuff</a>

	we should use <a [routerLink]=""
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