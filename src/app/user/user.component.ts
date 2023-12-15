import { Component, OnInit,ViewChild  } from '@angular/core';
import { GouvService } from 'app/gouv.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})
export class UserComponent implements OnInit {
    
   
  
    constructor(private gouvService: GouvService) {
      
    }
  
  
    ngOnInit() {
    }
  
    selectedGouv: string;
    gouvServiceData: any;
  
  
    onAfficherClick(select :any) {
      // Call the service method when the button is clicked
      this.gouvService.afficherDateByGouvName(select).subscribe(
        (data) => {
          this.gouvServiceData = data;
          console.log(data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }



}
