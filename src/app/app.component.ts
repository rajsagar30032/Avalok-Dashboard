import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from './app.consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  params: any[] = Constants.PARAMS;

  selectParam(val: string):void {
  	this.router.navigateByUrl(val);
  }

	constructor(private router: Router) { }

}
