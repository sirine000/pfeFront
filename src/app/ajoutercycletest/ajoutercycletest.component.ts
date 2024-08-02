import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CycleServiceService } from '../cycle-service.service';
import { FormateurService } from '../formateur.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formateur } from 'src/models/formateur';
import { CycleEntity } from 'src/models/cycle';
declare var $: any;
@Component({
  selector: 'app-ajoutercycletest',
  templateUrl: './ajoutercycletest.component.html',
  styleUrls: ['./ajoutercycletest.component.css']
})
export class AjoutercycletestComponent implements OnInit {

  constructor (private router:Router , private  CycleServiceService:CycleServiceService,private FormateurService:FormateurService ,private formBuilder:FormBuilder,private route:ActivatedRoute){};





// cycles :CycleEntity={
//     idCycle: -1,
//     nom_prof: "",
//     nomCycleDeFormation  : " ",
//     description: " ",
//     prix: 0,
//      dateDebut: new Date,
//     dateFin:  new Date,

//   //   this.dateDebut = this.formatDate(this.cycles.dateDebut);
//   // this.cycles.dateFin = this.formatDate(this.cycles.dateFin);

//   }

cycles!:CycleEntity;
// cycles: any = {};
formateurs:Formateur={
  idFormateur:-1 ,
    email:"",
    password:"",
    nomEtPrenom: "",
    tel:0,
  conf_password: "",
    photo:'',
}

  // private formatDate(date: Date): string {
  //   return date.toISOString().split('T')[0]; // Format 'yyyy-MM-dd'
  // }

//formateurss:string[] = [];
    cycle:string[] = [];

  //newproflist:string[]=[];
  forminput!:FormGroup;
//  test: boolean=true;
 // nomEtPrenomFormateur: string[]=[] ;
  //nomprenom:string = "";

 //nomEtPrenom!:string;
 idFormateur!: number ;
ngOnInit(): void {
  // this.id_formateur=+this.route.snapshot.paramMap.get('id_formateur')!;
  // this.getformateur();
//this.FormateurService.getlisteformateur().subscribe(() =>{});

    this.forminput = this.formBuilder.group({
      nomCycleDeFormation: [' ',Validators.required],
      description: [' ',Validators.required],
      prix: [' ',Validators.required],
      dateDebut :['',Validators.required],
      dateFin :[' ',Validators.required],
      idFormateur:['',Validators.required]

    });




    // if (this.id_formateur) {
    //   this.fetchNomEtPrenomFormateur();
    // }
  }

  // getformateur(){
  //   this.FormateurService.getnomidformateur(this.id_formateur).subscribe((nomrecuperer:String) =>{
  //   this.selectedFormateur =nomrecuperer;

  //   })}

  // fetchNomEtPrenomFormateur() {
  //   this.FormateurService.getnomidformateur(this.id_formateur)
  //     .subscribe(
  //       (nomEtPrenom: string) => {
  //         this.nomEtPrenomFormateur = nomEtPrenom;
  //         console.log('Nom et prénom du formateur récupérés avec succès:', nomEtPrenom);
  //       },
  //       error => {
  //         console.error('Erreur lors de la récupération du nom et prénom du formateur:', error);
  //       }
  //     );
  // }
// nomEtPrenomFormateur!: string;
// fetchNomEtPrenomFormateur() {
//   this.FormateurService.getnomidformateur(this.id_formateur)
//     .subscribe(
//       (nomEtPrenom: string) => {
//         this.nomEtPrenomFormateur = nomEtPrenom;
//         console.log('Nom et prénom du formateur récupérés avec succès:', nomEtPrenom);
//         return nomEtPrenom;
//       },
//       error => {
//         console.error('Erreur lors de la récupération du nom et prénom du formateur:', error);
//       }
//     );
// }
// fetchNomEtPrenomFormateur() {
//   this.FormateurService.getnomidformateur(this.id_formateur)
//     .subscribe(
//       (nomEtPrenom: string) => {
//         if (this.test) {
//           this.nomEtPrenomFormateur = nomEtPrenom;
//           console.log('Nom et prénom du formateur récupérés avec succès:', nomEtPrenom);
//         }
//       },
//       error => {
//         console.error('Erreur lors de la récupération du nom et prénom du formateur:', error);
//       }
//     );
// }


// valeur(){
//   this.CycleServiceService.getnomprof().subscribe(newlisteprof=>{this.newproflist=newlisteprof;})
// }

// changeselected(valeur:any){
//   this.creerCycleAvecFormateur(valeur);
// }

formSubmitted = false;
submissionMessage = '';


selectedFormateur: any;



  // cy!:CycleEntity;
  // ajouter(){
  //   // this.cy = this.cycles;
  //    $('#ajoutermodal').modal('show');
  //   this.submissionMessage = 'Cycle ajouté avec succès !';
  //    }
     fermer(){
    $('#ajoutermodal').modal('hide');

  this.formSubmitted = false;
    }

  // confirmercycle(){
  //   if(this.forminput.valid){


  //     this.CycleServiceService.ajouterCycleformateur(this.cycles).subscribe(
  //       cycleajouter=>{
  //       this.cycles=cycleajouter;
  //       this.resetForm();
  //       this.submissionMessage = 'Cycle modifier avec succès !';
  //       // console.log("cycle ajouté ",cycleajouter);
  //       // $('#ajoutermodal').modal('show');
  //       //  this.formSubmitted = true;

  //     // window.location.reload();



  // },
  // error => {
  // this.submissionMessage = 'Erreur lors de la création du cycle';
  // this.formSubmitted = true;
  // }
  // );
  // } else {
  //  this.submissionMessage = 'Le formulaire est invalide !';
  // console.log("cycle n'est pas ajouté ");

  // this.formSubmitted = true;
  // }

  // }


  // confirmercycle() {
  //   if (this.forminput.valid) {
  //     // Récupérer les valeurs du formulaire
  //     this.cycles.nomCycleDeFormation = this.forminput.value.nomCycleDeFormation;
  //     this.cycles.description = this.forminput.value.description;
  //     this.cycles.prix = this.forminput.value.prix;
  //     this.cycles.dateDebut = this.forminput.value.dateDebut;
  //     this.cycles.dateFin = this.forminput.value.dateFin;
  //     // Autres attributs à récupérer

  //     // Appeler le service pour ajouter le cycle
  //     this.CycleServiceService.ajouterCycleformateur(this.cycles).subscribe(
  //       cycleajouter => {
  //         this.resetForm(); // Réinitialiser le formulaire
  //         this.submissionMessage = 'Cycle ajouté avec succès !';
  //         console.log("Cycle ajouté :", cycleajouter);
  //         $('#ajoutermodal').modal('show');
  //         this.formSubmitted = true;
  //       },
  //       error => {
  //         this.submissionMessage = 'Erreur lors de l\'ajout du cycle';
  //         console.error("Erreur :", error);
  //         this.formSubmitted = true;
  //       }
  //     );
  //   } else {
  //     this.submissionMessage = 'Le formulaire est invalide !';
  //     this.formSubmitted = true;
  //   }
  // }





  resetForm()
{
  // this.formateur={
  //   id: -1,
  //   nomEtPrenom:" ",
  //   email:"",
  //   password:"",
  //   conf_password:"",
  //   tel:-1
  // }
this.forminput.reset();
  this.formSubmitted = true;
  this.submissionMessage = '';
}
ajouter() {
  if ( this.forminput.valid) {


    this.CycleServiceService.ajouterCycleformateur(this.cycles).subscribe(newformateur=>
      {this.cycles=newformateur;
        this.resetForm();
        console.log("utilisateur ajouter");

        this.submissionMessage = 'Formulaire enregistré avec succès !';
        this.formSubmitted = true;


        console.log("utilisateur ajouter")},error=>{console.error("erreur",error); this.submissionMessage = 'erreur'; })

}


   else {

    this.submissionMessage = 'Le formulaire est invalide !'
    this.formSubmitted = true;
  }


}

}

