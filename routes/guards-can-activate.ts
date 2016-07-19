/*
	Guards guard certain routes from being accessed or not depending on some conditions.

	There are 2 guards with the angular 2 router:
		- canActivate
			- happens when you want to navigate into a certain route
		- canDeactivate
			- happens when you want to navigate away from a certain route
	
	To create a guard, we need to have a class that implements CanActivate or CanDeactivate from @angular/router.
	Implementing these will require us to define the method canActivate and canDeactivate respectively.
*/

//------------------ user-detail.guard.ts ---------------------------

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class UserDetailGuard implements CanActivate {
	canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot ) : Observable<boolean> | boolean {
		return confirm('are you sure you want to go to this route?');
	}
}

/*
	The reason we return an Observable<boolean> or boolean is that we may have an asynchronous process running and
	thus may not have the information we need to determine whether we can access a route or not. So returning
	an observable will all us to listen to changes on the observable and if the emitted value is false, we cancel
	the routing else we continue with the routing.
*/

//---------------------- app.routes.ts -------------------------------
import { RouterConfig, provideRouter } from '@angular/router';
import { UserDetailGuard } from './user-detail.guard';

const APP_ROUTES: RouterConfig = [
	{ path: 'user', component: UserComponent }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES)
];

//---------------------- user-detail.routes.ts -------------------------

export const USER_ROUTES: RouterConfig = [
	{ path: 'details', component: UserDetailsComponent, canActivate: [UserDetailGuard] }
];

//----------------------- main.ts or boot.ts ---------------------------
import { UserDetailGuard } from '@angular/router';

// Angular 2 needs to know that you want to create a global instance (or singleton) of UserDetailGuard
bootstrap(AppComponent, [
	APP_ROUTES_PROVIDER,
	UserDetailGuard
]);