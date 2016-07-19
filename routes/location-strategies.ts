/*
	Location Strategies

	A Location Strategy basically defines how your URL / Request will be resolved. With that, it also determines
	 how your URL will look like.

	Angular 2 supports two Location Strategies:

	1. PathLocationStrategy (Default)

	You URL looks like this example.com/user/12/details.

	A Request is first handled by the Server. Since the Server probably won't (and shouldn't) find this
	 Route (it's your Angular 2 Route), it will throw an 404 Error and return the 404 Error Document. 
	 Therefore the Server has to be configured in a Way, that 404 Errors load the index.html File. 
	 Then, the Angular 2 App can take over and resolve this Route.

	Important Note: A "Request" triggered from inside your App (e.g. Click on a Link) will NOT send a 
	Request to the Server. Instead Angular 2 is able to handle the Request right away.

	This is the default Strategy and you don't have to do anything to use it.

	2. HashLocationStrategy

	You URL looks like this: example.com/#/user/12/details.

	This is the "old Style" to use URLs/ Routing in Single Page Applications. The Server stops 
	parsing the URL at the # sign and will load the index.html file. Therefore, the Angular 2 App can
	take over and will parse the remaining Part of the URL (after the #).

	You have to opt into this Strategy if you want to use it. Do it like this:

	Add the following Provider to your bootstrap() method:
*/
	import { LocationStrategy,
	         HashLocationStrategy } from '@angular/common'; // Add this Import
	 
	bootstrap(AppComponent, [
	    { provide: LocationStrategy, useClass: HashLocationStrategy } // Add this Provider
	]);

/*

	Learn more about the two Strategies here: https://angular.io/docs/ts/latest/guide/router.html#!#browser-url-styles

*/