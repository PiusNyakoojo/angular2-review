/*
	The CanDeactivate guard is a bit different from the CanActivate guard.

	Firstly, what is the guard for? Well, this guard is for checking if it's okay if we can navigate AWAY from a component.
	In order to do this, we might need to access certain variables or methods in a component. That's why we need to
	have an interface that our component implements for our CanDeactive guard to work.
*/


//-------------------- user.guard.ts --------------------------------
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface ComponentCanDeactivate {
	canDeactivate: () => Observable<boolean> | boolean;
}

export class UserGuard implements CanDeactivate<ComponentCanDeactivate> {
	canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
		return component.canDeactivate ? component.canDeactivate() : true;
	}
}


//-------------------- user.component.ts ---------------------------------
import { ComponentCanDeactive } from './user.guard';

export class UserComponent implements ComponentCanDeactivate {

	canDeactivate(): Observable<boolean> | boolean {
		return confirm('Are you sure you want to leave this component?');
	}
}

//--------------------- app.routes.ts -----------------------------------

import { UserGuard } from './user.guard';

const APP_ROUTES: RouterConfig = [
	{ path: 'user', component: UserComponent, canDeactivate: [UserGuard] }
];

//-------------------- main.ts ------------------------------------------

bootstrap(AppComponent, [UserGuard]); // Use the UserGuard as a service (i.e. creating a singleton object for the rest of the application to reuse)