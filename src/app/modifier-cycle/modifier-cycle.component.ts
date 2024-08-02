import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../formateur.service';
import { CycleServiceService } from '../cycle-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CycleEntity } from 'src/models/cycle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare  var $: any ;
@Component({
  selector: 'app-modifier-cycle',
  templateUrl: './modifier-cycle.component.html',
  styleUrls: ['./modifier-cycle.component.css']
})


export class ModifierCycleComponent {
cycle! :CycleEntity;
idCycle! :number;
form !:FormGroup;

constructor(private formateurservice:FormateurService,private cycleServiceService:CycleServiceService,private route:ActivatedRoute,private formBuilder:FormBuilder){}



ngOnInit(): void {

  this.idCycle=+this.route.snapshot.paramMap.get('idCycle')!;
  this.getcycle(); 

//   // this.CycleServiceService.getnomprof().subscribe(item =>{this.cycle=item;

    this.form = this.formBuilder.group({
      nomCycleDeFormation: [' ',  Validators.required],
      description: [' ', Validators.required],
      prix: [' ', [Validators.required]],
      dateDebut :['',Validators.required],
      dateFin :[' ',Validators.required],
     //id_formateur:['',Validators.required]
   nomEtPrenom:['',Validators.required]
    });


  }
  


getcycle(){
  this.cycleServiceService.getcycleid(this.idCycle).subscribe(cyclerecuperer =>{
    this.cycle=cyclerecuperer;
  
  })
}
  
formSubmitted = false;
submissionMessage = '';



 x!:CycleEntity;
modifier(){
   this.x = this.cycle;
   $('#updatemodal').modal('show');
   this.submissionMessage = 'Cycle ajouté avec succès !';
   }
   fermermodifier(){
  $('#updatemodal').modal('hide');
   
this.formSubmitted = false;
  }







confirmercycle(){
  if(this.form.valid){
    this.cycleServiceService.getmodifiercycle(this.idCycle,this.cycle).subscribe(cyclemodifier=>{
      this.submissionMessage = 'Cycle modifier avec succès !';
      console.log("cycle modifié",cyclemodifier);
      $('#updatemodal').modal('show');
      this.formSubmitted = true;
     
    // window.location.reload();
    // this.resetForm();
   
},
error => {
this.submissionMessage = 'Erreur lors de la création du cycle';
this.formSubmitted = true;
}
);
} else {
this.submissionMessage = 'Le formulaire est invalide !';
this.formSubmitted = true;
}

}







  // modifierformateur(id_cycle :number,cycle:cycle){
  //   return this.cycleServiceService.getmodifiercycle(id_cycle, cycle).subscribe(()=>{})
  // }
  
}







  