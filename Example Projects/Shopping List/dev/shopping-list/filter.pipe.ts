import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";
import {ListItem} from "./list-item";

@Pipe({
	name: "myFilter"
})

export class FilterPipe implements PipeTransform{

	transform(value: ListItem[], args: string[]):any {
		if (value.length === 0)
			return;

		let resultArray = [];

		for (let item of value) {
			if (item.name.match("^.*" + args[0] + ".*$")) { // this regex specifies that the string arg[0] is anywhere in our name string
				resultArray.push(item);
			}
		}

		return resultArray;
	}
}