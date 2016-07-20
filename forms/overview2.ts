/*
	The Angular 2 Forms Module is not finished yet, the latest Version currently is 0.2.0. Therefore,
	your package.json should contain this line:

	"@angular/forms":"0.2.0"

	In order to use the new Forms Module right now, you need to adjust your bootstrap() method in the main.ts file:
*/

import { disableDeprecatedForms, provideForms } from "@angular/forms";

bootstrap(AppComponent, [
	disableDeprecatedForms(),
	provideForms()
]);