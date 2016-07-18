/*
	HostListener allows you to access events that the Host element emits
	
	HostBinding allows you to bind to properties of the host element. In the example below
	we only use the get keyword since we want the color to be read only. We would use
	set if we wanted write access to outside components as well.

	getters and setters are a typescript concept
	
	Examples of using HostBinding decorator: 

	@HostBinding(property_to_bind_to) get getSomething() {
		return this.something;
	}

	// In this example, the class 'open' will only be appended to the element that this directive is
	// attached to if this.isOpened is true.

	@HostBinding('class.open') get opened() {
		return this.isOpened;
	}

*/



import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[highlight]'
})

export class HighlightDirective {
	@HostListener('mouseenter', ['$event']) mouseover(event) {
		//console.log( event );
		this.backgroundColor = 'green';
	}
	@HostListener('mouseleave') mouseover() {
		this.backgroundColor = 'white';
	}

	@HostBinding('style.backgroundColor') get setColor() {
		return this.backgroundColor;
	}

	private backgroundColor = 'white';

	constructor() {

	}
}