/*
	When passing metadeta to our Component decorator, the moduleId metadata is useful when using external files
	(e.g. an external template file or css). You'll need the moduleId once your application is in production,
	compiled and maybe bundled, to still find the appropriate external references for the files.

	In other words, to use relative referencing rather than absolute references when pointing to our external
	templates and style sheets, we use moduleId.

	The bare minimum a component needs is to have a template.

	Basically when we create a component, we are converting a default typescript class into an angular 2 component

	To generate different pieces of our application (e.g. components, we can use angular2-cli command)
	ng generate component NAME_OF_COMPONENT
	ng g component NAME
	ng g c NAME --flat -it -is (flat: stays in the same folder, it: inline-template, is: inline-style)


	The Shadow DOM (Document Object Model)
		- an html element has a separate DOM behind the scene

	If you want to pass html content from one element to another we can use the ng-content directive to render the content
	that's passed by the parent component. For example:

	In our app.component.ts we have:
	template: `
		<h1>Header</h1>
		<comp1>
			<div>
				<h1>Some stuff</h1>
				<p>Some more stuff</p>
			</div>
		</comp1>
	`

	In our comp1.component.ts we have:
	template: `
		<article>
			<ng-content></ng-content>
		</article>
	`

	In this way, our comp1 will render the content that's passed between it's opening and closing tags



	Component Life Cycle hooks:
		- ngOnChanges
			- Executed before ngOnInit and when data-bound property value change
			- When angular 2 looks at your property to see if something changed, it updates the rendered html.
				When something is changed, this life cyle hook is called and we can implement it to add additional
				functionality to our component at this particular moment that the property changes.
		- ngOnInit
			- Called when a component is initialized. This occurs after ngOnChanges
			- While it might seem strange this this is executed AFTER ngOnChanges, keep in mind that ngOnChanges
				is typically executed multiple times whereas ngOnInit is executed once (when our component is
				created)
			- It's actually a good design to have this call after ngOnChanges. ngOnChanges initializes all our
				properties and therefore we can use them in ngOnInit.
		- ngDoCheck
			- This is called during every angular 2 change detection.
			- You might be wondering.. well isn't that what ngOnChanges is for? Yes. ngOnChanges is called during
				each change but ngDoCheck is called during each change detection cycle.
			- We will cover change detection at the end of this course.
		- ngAfterContentInit
			- After inserting content (with <ng-content>)
		- ngAfterContentCheck
			- After every check of inserted content
		- ngAfterViewInit
			- After initializing the component's views/child views
		- ngAfterViewChecked
			- After every check of the component's views/child views
		- ngOnDestroy
			- Just before angular 2 destroys the directive/component


	You can use #localVarName to give an element a local variable reference. For example

	<h1 #boundElement></h1>

	Now this particular tag can be referenced anywhere else from this template. If we want to reference
	it in our class for the component, we need to add some additional information:

	import {ViewChild} from "@angular/core";

	@ViewChild('boundElement')
	myBoundElement: HTMLElement;


	Also remember: We can only use these elements after the ngAfterViewInit method has been called.


	To select an element that's being passed by a parent component that contains something like
	<comp1-component>
		<div #someContent>
			Some content that we are passing
		</div>
	<comp1-component>

	We can use ContentChild:

	@ContentChild('someContent')
	contentChild: HTMLElement;

	Also remember: We can only use these elements after the ngAfterContentInit method has been called.


*/