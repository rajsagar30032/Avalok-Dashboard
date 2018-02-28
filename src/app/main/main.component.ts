import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	param: string;
	temp: number;

	options: any;
  chart: any;
  data: any[] = [];

	private updateView(param:string):void {
  		this.param = param;

  		this.options = {
  		    title : { text : param },
  		    series: [{
  		        name: param,
  		        data: [],
  		        allowPointSelect: true
  		    }]
  		};

  		setInterval(() => {
  			let x = this.appService.getRandomInt();
        this.data.push(x);
  			this.chart.series[0].addPoint(x);
  			this.temp = this.temp + 1;
  			console.log(this.temp);
        }, 2000);
  	}

    saveChart(chart):void {
      this.chart = chart;
    }

  	constructor(private route: ActivatedRoute, private appService: AppService) { }

  	ngOnInit() {
  		this.temp = 0;
  		this.route.params.subscribe( params => this.updateView(params['param']) );
  	}
}
