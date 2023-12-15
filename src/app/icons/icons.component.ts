import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeureService } from 'app/heure.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  HeureDetails : any;

  constructor(private heureService:HeureService) { }
  initializeChart() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['02-00', '04-02', '06-04', '08-06', '10-08', '12-10','14-12','16-14','18-16','20-18','22-20','24-22'],
          datasets: [{
              label: 'Nombre des accidents par heure',
              data: [163, 114, 170, 399, 523, 609,626,567,716,591,508,246],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
  ngOnInit() {
    
    this.getHeureDetails();
    this.initializeChart();
  }


  getHeureDetails()
  {
    this.heureService.getDataHeure().subscribe(
      (resp)=>{
        console.log('response');
        this.HeureDetails = resp ;
      },
      (err)=>{
        console.log('error');
      }
    );





  }





  






  

}
