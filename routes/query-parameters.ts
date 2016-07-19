/*

	Angular 2 still supports Query Parameters when routing.
	
	Example:
		example.com/user/?isLoggedIn=false

	isLoggedIn is a query parameter. Query parameters are optional.

	We don't add query parameters to the segments array ['path1', somequeryparam] because this is
	only used for paths defined in the APP_ROUTES array.

	To pass a query paramater we pass it as the second parameter to the navigate method of the router

	this.router.navigate(['user'], {
		queryParams: {
			'isLoggedIn': false
		}
	});


	To extract the query parameter we can use the router to subscribe to the query param change
	
	import { OnDestroy } from '@angular/core';
	import { Router } from '@angular/router';
	import { Subscription } from 'rxjs/Rx';

	export class UserComponent implements OnDestroy {
		
		private subscription: Subscription;
		param: string;
		
		constructor(private router: Router) {
			this.subscription = router.routerState.queryParams.subscribe(
				(queryParam: any) => this.param = queryParam['id']
			);
		}

		ngOnDestroy() {
			this.subscription.unsubscribe();
		}
	}

	What if we want to add query parameters through the routerLink directive? Well, we can bind to the
	queryParams property and pass an object that contains the key-value pairs of our query.

	<a [routerLink]="['']" [queryParams]="{isLoggedIn: false}">Home</a>
*/