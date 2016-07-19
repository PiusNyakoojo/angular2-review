/*
	This is an example of using child routes in Angular 2.

	It is best practice to keep your child routes in separate files and export them..
	This makes the code easier to read with large-scale applications

*/

//---------------- app.routes.ts ----------------------

import { proivdeRouter } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { GamesComponent } from './games.component';
import { USER_ROUTES } from './user.routes';


const APP_ROUTES = [
	{ path: '', component: HomeComponent },
	{ path: 'user/:id', component: UserComponent, children: USER_ROUTES },
	{ path: 'games', component: GamesComponent }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES)
];

//----------------- user.routes.ts -----------------------

import { DetailsComponent } from './details.component';
import { EditComponent } from './edit.component';


export const USER_ROUTES = [
	{ path: 'details', component: DetailsComponent },
	{ path: 'edit', component: EditComponent }
];

/*

	As of Angular 2 RC4 to add child routes to a path, we need to have 2 paths specified:
		- one without the children
		- one with the children

	So it should look like:

	{ path: 'user/:id', component: UserComponent },
	{ path: 'user/:id', component: UserComponent, children: USER_ROUTES }

	Keep in mind that this might change in the future..

*/