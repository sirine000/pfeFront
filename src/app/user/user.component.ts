import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
declare var $:any ; 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router:Router){}
// name="sirine" ;
// location="tunisia";

// getlocation(){
//   return this.location; 
// }
//  getmessage(){
//   console.log("welcome");
//  }

// confirmdelete(){
// $('#deletemodal').modal("show" );
// }


cycleparticipant(){
  this.router.navigate(['cycleparticipant']);
}


coursparticipant(){
  this.router.navigate(['coursParticipant']);
}

comptee(){
  this.router.navigate(['compteParticipant'])
}
}
