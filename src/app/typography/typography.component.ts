import { Component, OnInit } from '@angular/core';
import { MoisService } from 'app/mois.service';

import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  MoisDetails : any;

  constructor(private moisService:MoisService) { }
  public emailChartType: ChartType;
  public emailChartData: any;
  public emailChartLegendItems: LegendItem[];

  public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];

  public activityChartType: ChartType;
  public activityChartData: any;
  public activityChartOptions: any;
  public activityChartResponsive: any[];
  public activityChartLegendItems: LegendItem[];
  
  ngOnInit() {
    this.getMoisDetails();

    this.emailChartType = ChartType.Pie;
    this.emailChartData = {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6]
    };
    this.emailChartLegendItems = [
      { title: 'Accidents', imageClass: 'fa fa-circle text-info' },
      { title: 'Morts', imageClass: 'fa fa-circle text-danger' },
      { title: 'Blessés', imageClass: 'fa fa-circle text-warning' }
    ];

    this.hoursChartType = ChartType.Line;
    this.hoursChartData = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
        [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
        [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
      ]
    };
    this.hoursChartOptions = {
      low: 0,
      high: 800,
      showArea: true,
      height: '245px',
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: false,
      showPoint: false,
    };
    this.hoursChartResponsive = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.hoursChartLegendItems = [
      { title: 'Accidents', imageClass: 'fa fa-circle text-info' },
      { title: 'Morts', imageClass: 'fa fa-circle text-danger' },
      { title: 'Blessés', imageClass: 'fa fa-circle text-warning' }
    ];



    this.activityChartType = ChartType.Bar;
    this.activityChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [10.04 , 8.71, 9.75, 10.02, 8.79, 8.78, 9.59, 9.59, 8.18, 8.12, 6.25, 2.23],
        [11.37, 6.04, 6.74, 8.92, 6.91, 10.24, 1.15, 8.4, 9.01, 9.89, 9.8, 2.54]
      ]
    };
    this.activityChartOptions = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };
    this.activityChartResponsive = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.activityChartLegendItems = [
      { title: 'Nb Blessés', imageClass: 'fa fa-circle text-info' },
      { title: 'Nb morts', imageClass: 'fa fa-circle text-danger' }
    ];


  }

  


  getMoisDetails()
  {
    this.moisService.getDataMois().subscribe(
      (resp)=>{
        console.log('response');
        this.MoisDetails = resp ;
      },
      (err)=>{
        console.log('error');
      }
    );}

}
