import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

	public getRandomInt():number {
  		return Math.floor(Math.random() * Math.floor(100));
	}

	constructor() { }

}
