/*
	This is an example of redirecting to different paths

		- use the redirectTo metadata
			{ path: 'user/:id', component: UserComponent },
			{ path: 'user', redirectTo: '/user/1', pathMatch: 'full' }

			this redirects to the absolute path of user and passes an id of 1

			pathMatch: 'full' makes sure that only when the path matches exactly (i.e. no additional parameters or subpaths)
			then the redirect occurs

			In order for this redirect with pathMatch to work, we need to make the type of the APP_ROUTES to be RouterConfig.
			
			import { provideRouter, RouterConfig } from '@angular/router';

			const APP_ROUTES: RouterConfig = [
				//...
			];

		- To handle url paths that aren't handled (i.e. to show a 404 not found page), we can use the ** wildcard path
			to indicate any path that we don't have explicit path-component routing to:

			const APP_ROUTES: RouterConfig = [
				{ path: 'home', component: HomeComponent },

				// ...

				{ path: '**', redirectTo: 'home', pathMatch: 'full'}
			];
*/