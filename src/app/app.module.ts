import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { AppService } from './app.service';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

const appRoutes: Routes = [
  {path: ':param', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    RouterModule.forRoot(
      	appRoutes,
      	{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
