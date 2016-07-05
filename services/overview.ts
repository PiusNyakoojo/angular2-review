/*
	Services
		- Central classes or points where we store logic that we could resuse in several parts of our application
		- We inject services into several components and use the methods defined in the service within those
			different components
		- Serives can provide a way of interacting between different components but in general it's just an easy
			way to have centralized logic instead of duplicating it in several places of our application
		- In addition, there's the benefit of deciding whether we'd like to have a single instance of a service
			(and if we change one thing in this instance it will be reflected in another) -- singleton
		- Or, we can have several instances so that each component can get its own version of the service so that
			the service is totally independent of changes in other components -- non-singleton

	Things we learn:
		- @Injectable
		- "providers" metadata
			- A provider is an instruction that describes how an object for a certain token is created
		- singleton
			- Only one instance exists at a time
			- To create a singleton service, provide the [ServiceName] as a parameter when bootstrapping the application
				- i.e. bootstrap(AppComponent, [LoggingService]);
			- To create a non-singleton, provide the "providers" metadata to the particular component the service will work in
				- i.e. providers: [LoggingService]
		- Dependency hierarchy
			- If you inject a service at the root of a component, it will also be injected to child components
			- If you inject the service at the child level, each child has a separate instance of the service
		- Dependecy injection
			- The process of passing a specific instance of an object to a method in a class

*/

import {Component} from "@angular/core";
import {Component1Component} from "@angular/core";


@Component({
	selector: "my-app",
	template: `
		<component-1></component-1>
	`,
	directives: [Component1Component]
})

export class AppComponent {

}

//------------------- component1.component.ts ------------------------------
import {Component} from "@angular/core";
import {LoggingService} from "./services/logging.service";

@Component({
	selector: "component-1",
	template: `
		<input type="text" #message />
		<button (click)="onLog(message.value)" >Send</button>
	`,
	providers: [LoggingService] // doing this tells angular 2 how to create this service. This is one way of specifying how angular 2 will create this service
})

export class Component1Component {

	constructor(private _loggingService: LoggingService) {}

	onLog(message: string) {
		this._loggingService.log(message);
	}
}

//------------------- component2.component.ts ------------------------------
import {Component} from "@angular/core";

@Component({
	selector: "component-2",
	template: `

	`
})

export class Component2Component {
	
}

//--------------------- services/logging.service.ts ---------------------------
import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
	log(message: string) {
		console.log(message);
	}
}

//---------------------- boot.ts ----------------------------------------------
import {bootstrap} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoggingService} from "./services/logging.service"


/*
	This is another way of injecting a service in our application..

	Angular 2 uses a hierarchical injector.. that means all child components will aslo have access to that specific instance
	of the service (that's injected to the root component)

*/

bootstrap(AppComponent, [LoggingService]);