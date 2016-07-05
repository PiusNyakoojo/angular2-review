/*
	Example of using a service to fetch data
*/


//--------------- app.component.ts ----------------------------
import {Component} from "@angular/core";
import {DataService} from "./services/data.service";

@Component({
	selector: "my-app",
	template: `

		<h1>Data Service</h1>
		<button (click)="onGetData()" >Get some data</button>

		<h1>Input</h1>
		<input type="text" #newData />
		<button (click)="onInsert(newData.value)" >Insert new Data</button>
	`,
	providers: [DataService]
})

export class AppComponent {
	data: string;

	constructor(private _dataService: DataService) {

	}

	onInsert(value: string) {
		this._dataService.insert(value);
	}

	onGetData() {
		this.data = this._dataService.getRandomString();
	}
}








//---------------- data.service.ts -----------------------------
import {Injectable} from "@angular/core";

@Injectable()
export class DataService {
	private _data = ['Summer', 'Winter', 'Warm', 'Cold'];

	getRandomString() {
		let rndNum = Math.floor(Math.random() * this._data.length);
		return this._data[rndNum];
	}

	insert(value: string) {
		this._data.push(value);
	}
}