import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { CauseService } from 'app/cause.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CauseDetails : any;

  constructor(private causeService:CauseService) { }


  ngOnInit() {
    
    this.getCauseDetails();
  }


  getCauseDetails()
  {
    this.causeService.getDataCause().subscribe(
      (resp)=>{
        console.log('response');
        this.CauseDetails = resp ;
      },
      (err)=>{
        console.log('error');
      }
    );}
  

}
