/*

	Pipes
		- Pipes allow you to transform data when you output it to html
		- When you output something as html, you can use pipes to transform the way it appears
		- For example, how it's formatted, how many decimals are attached, which currency might be attached, etc..
	
	There are 2 types of pipes
		- Stateful pipes
			- Knows that the value might change and will listen for that change and come back when the value is ready to be
				output
			- Example: async pipe

		- Stateless pipes
			- We enter a value, and we get it back in a transformed way. But that's it
			- Example: date, number, currency pipes


	Syntax:
		someDate | pipeName:input0:input1:...:inputN

	
	Angular 2 has some built in pipes like date and async

*/

import {Component} from "@angular/core";
import {ReversePipe} from "./reverse.pipe";

@Component({
	selector: "my-app",
	template: `

		<!-- Date Pipe -->

		<h1>Today is {{today}}</h1>
		<!-- Today is Fri Feb 05 2016 13:04:35 GMT+0100 (CET) -->

		<h1>Today is {{today | date }}</h1>
		<!-- Today is  Feb 5, 2016-->
		
		<h1>Today is {{today | date:'short' }}</h1>
		<!-- Today is  2/5/2016-->

		<h1>Today is {{today | date:'longDate' }}</h1>
		<!-- Today is  February 5, 2016-->

		<h1>Today is {{today | date:'y-m-d' }}</h1>
		<!-- Today is  2016-2-5 -->

		
		<!-- Lowercase/Uppercase Pipe -->
		
		<input type="text" #textInput />
		<h1>Output lowercase: {{textInput.value | lowercase}}</h1>
		<h1>Output uppercase: {{textInput.value | uppercase}}</h1>

		<!-- Slice Pipe -->

		<input type="text" #textInput2 />
		<input type="text" #num1 />
		<input type="text" #num2 />
		<h1>Output: {{textInput2 | slice:num1.value:num2.value}}</h1>

		<!-- Number Pipe -->

		<input type="text" #numInput />
		<h1>Decimal: {{ 1.0 * numInput.value | number:'1.1-2' }}</h1>
		<!-- We multiply with 1.0 to actually output a decimal number -->
		<!-- 1.1-2 specifies that there will be should be at most 1 leading 0. After the decimal, there should be at least 1 decimal place and at most 2 decimal places -->
		

		<!-- Currency Pipe -->
		<input type="text" #currencyType />
		<input type="checkbox" #currencyShort />
		<h1>Currency: {{ 1.0 * numInput.value | currency:currencyType.value }}</h1>

		<!-- OR -->

		<h1>Currency: {{ 1.0 * numInput.value | currency:currencyType.value:currencyShort.checked }}</h1>


		<!-- Chaining Pipes (Combining multiple pipes) -->


		<input type="text" #inputChainPipes (keyup)="0" />
		<div>Chain Pipes Output: {{inputChainPipes | slice:1:3 | uppercase}}</div>
	

		<!-- Custom Pipes -->
		<input type="text" #someInput />
		<h1>Output: {{someInput.value | myReverse}}</h1>


		<!-- Async Pipe -->

		<h1>Async pipe output: {{stateFulPipeOutput | async}}</h1>


	`,
	pipes: [ReversePipe]
})

export class AppComponent {
	today = new Date();

	// A promise is an object that will return with the output when it's finished getting it.. But it won't block other code from running

	// Fat arrow functions are just a shorter way of writing anonymous functions
	stateFulPipeOutput = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Data is there!', 2000));
	});


}

//----------------- reverse.pipe.ts --------------------------
import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core"; // in order to transform something, we need to import and implement this interface


@Pipe({
	name: 'myReverse' // can't use my-reverse (i.e. no hiphens allowed!)
})

export class ReversePipe implements PipeTransform{

	/*
		PipeTransform interface requires us to implement the transform method which will be called by angular 2 when it encounters our pipe in the code
		
		So angular 2 runs over our template, finds the pipe symbol and finds the my-reverse pipename and knows that it's a pipe
		because of our pipe decorator metadata. Then it will execute the transform method in this pipe to actually transform
		the data
	*/

	transform(value: string, args:any[]) {
		const length = value.length;
		let resultString = '';

		for (let i = 0; i < length; i++) {
			resultString = value[i] + resultString;
		}

		return resultString;
	}
}