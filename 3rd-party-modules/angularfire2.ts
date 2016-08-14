/*
	1. Install AngularFire 2 and Firebase

		npm install angularfire2 firebase --save

	2. Include Firebase SDK typings

		typings install file:node_modules/angularfire2/firebase3.d.ts --save --global && typings install

		- This saves the typings reference into typings.json and installs it.
		- Note: for typings < 1, use the --ambient flag instead of --global
		- Unless you're targeting ES6 output in tsconfig.json, you'll also need to install typings for the global Promise constructor.
			Run this command:

		typings install --save --global es6-promise

		- If you're using Anugular CLI, the typings will automatically be added to your tsconfig since there is already a reference to
			"typings.d.ts" which transitively includes es6-promise. If you're using a different seed project, or managing your build yourself,
			just add the reference to your tsconfig files array:

		"files": [
			"node_modules/angularfire2/firebase3.d.ts",
			"typings/main.d.ts"
		]

	3. Include AngularFire2 and Firebase in the vendor files

		- Open angular-cli-build.js
		- Include AngularFire2 and Firebase in the vendorNpmFiles array:
*/

	/* global require, module */

	var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

	module.exports = function(defaults) {
		return new Angular2App(defaults, {
			vendorNpmFiles: [
				'systemjs/dist/system-polyfills.js',
				'systemjs/dist/system.src.js',
				'zone.js/dist/**/*.+(js|js.map)',
				'es6-shim/es6-shim.js',
				'reflect-metadata/**/*.+(js|js.map)',
				'rxjs/**/*.+(js|js.map)',
				'@angular/**/*.+(js|js.map)',
				// above are the existing entries
				// below are the AngularFire entries
				'angularfire2/**/*.js',
				'firebase/*.js'
			]
		});
	};

/*
	4. Build

		ng build

		- Run a build and check the /dist/vendor folder for the angularfire2 and firebase folders.

	5. System.js

		- Open /src/system-config.ts . Modify the file like below:
*/

/** Map relative paths to URLs. */

const map: any = {
	'firebase': 'vendor/firebase/firebase.js',
	'angularfire2': 'vendor/angularfire2'
};

/** User packages configuration. */

const packages: any = {
	angularfire2: {
		defaultExtension: 'js',
		main: 'angularfire2.js'
	}
}

/*
		- AngularFire 2 and Firebase need to be mapped with System.js for module loading.

	6. Bootstrap

		- Open /src/main.ts, inject the Firebase providers, and specify your Firebase configuration. This can be found in your
			project at the Firebase Console
*/

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MyAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
	enableProdMode();
}

bootstrap(MyAppComponent, [
	FIREBASE_PROVIDERS,
	// Initialize Firebase app
	defaultFirebase({
		apiKey: '<your-key>',
		authDomain: '<your-project-authdomain>',
		databaseURL: '<your-database-URL>',
		storageBucket: '<your-storage-bucket>'
	})
]);


/*
	7. Inject AngularFire

		- Open /src/app/MyAppComponent.component.ts, and make sure to modify/delete any tests to get the sample working
			(tests are still important, you know):

*/

import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'my-app.component.html',
	styleUrls: ['my-app.component.scss']
})

export class MyComponent {
	constructor(af: AngularFire) {

	}
}

/*
	8. Bind to a list

		- In /src/app/my-app.component.ts :
*/

import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'my-app.component.html',
	styleUrls: ['my-app.component.scss']
})

export class MyComponent {
	items: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.items = af.database.list('items');
	}
}

/*
		- Open /src/app/my-app.component.html :
		
		<ul>
			<li class="text" *ngFor="let item of items | async">
				{{item.$value}}
			</li>
		</ul>

		- The async pipe unwraps the each item in the people observable as they arrive. Also the array that is received
			through the items observable contains objects that have a $value property. A structure like this:

			[
				{
					$value: 'something',
					(...)
				},
				{
					$value: 'something else',
					(...)
				},...
			]

	9. Serve

		
*/