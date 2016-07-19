/*
	Here we will demonstrate how to add styling to an active route link

	We use the routerLinkActive directive and set the name of the class to use to style the element when the link
	is active.

	Because the routerLinkActive will mark which ever link is active as long as it satisfies the path. Since all
	paths contain '', the Home link would always be active if this were the only information we provided angular 2.

	To prevent this default behavior, we can use the routerLinkOptions directive and pass an object that contains the
	'exact' metadata set to true:

	<a [routerLink]="['']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>

	You can also add styling to other elements if this route is active:

	<div routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
		<a [routerLink]="['']">Home</a>
	</div>

*/

//--------------- app.component.ts -----------------------------

import { Component } from '@angular/core';

@Component({
	selector: 'root-app',
	template: `
		<header>
			<a [routerLink]="['']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a> |
			<a [routerLink]="['/user']" routerLinkActive="active">User</a>
		</header>

		<router-outlet></router-outlet>
	`,
	styles: [`
		.active {
			color: red
		}
	`]
})