import { Component, OnInit } from '@angular/core';
import { CoursServiceService } from '../cours-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajoutercours',
  templateUrl: './ajoutercours.component.html',
  styleUrls: ['./ajoutercours.component.css']
})
export class AjoutercoursComponent {
  // selectedFile!: File;
  // event:any;
  constructor(private coursService: CoursServiceService,private route:ActivatedRoute) {    this.fetchCycleId();
  }
  selectedFiles: File[] = [];
  nomCours: string = '';
  idCycle: number = 0;
  message: string = '';
// selectedFiles!:FileList[] ;

  // constructor(private coursService: CoursService) {
  //   this.fetchCycleId();
  // }

  onFileChange(event: any) {
    console.log(event.target.files)
    this.selectedFiles = event.target.files;
    console.log("selected",this.selectedFiles.length);
  }

  fetchCycleId() {
    // Remplacez cela par votre logique pour récupérer l'ID du cycle
    this.idCycle = this.getCycleIdFromSomewhere();
  }

  getCycleIdFromSomewhere(): number {
    // Implémentez votre logique pour récupérer l'ID du cycle
    // Par exemple, à partir d'un service ou d'une autre source
    return 123; // Exemple d'ID de cycle
  }

  uploadFiles() {
    if (this.selectedFiles.length === 0) {
      this.message = 'Veuillez sélectionner des fichiers à uploader.';
      return;
    }

    if (!this.nomCours || !this.idCycle) {
      this.message = 'Veuillez fournir le nom du cours et l\'ID du cycle.';
      return;
    }

    this.coursService.uploadMultipleFiles(this.selectedFiles , this.nomCours, this.idCycle)
      .subscribe(
        response => this.message = 'Fichiers uploadés avec succès et associés au cycle.',
        error => this.message = 'Échec de l\'upload des fichiers.'
      );
  }
  // selectedFiles: File[] = [];
  // nomCours: string = '';
  // idCycle: number = 0;
  // message: string = '';


  // onFileChange(event: any) {
  //   this.selectedFiles = event.target.files;
  // }

  // uploadFiles() {
  //   if (this.selectedFiles.length === 0) {
  //     this.message = 'Veuillez sélectionner des fichiers à uploader.';
  //     return;
  //   }

  //   // if (!this.nomCours || !this.idCycle) {
  //   //   this.message = 'Veuillez fournir le nom du cours et l\'ID du cycle.';
  //   //   return;
  //   // }

  //   this.coursService.uploadMultipleFiles(this.selectedFiles, this.nomCours, this.idCycle)
  //     .subscribe(
  //       response => this.message = 'Fichiers uploadés avec succès et associés au cycle.',
  //       error => this.message = 'Échec de l\'upload des fichiers.'
  //     );
  // }
  // idCycle!: number ;
  

  // onUpload(): void {
  //   if (!this.selectedFile || !this.nomCours) {
  //     alert('Veuillez sélectionner un fichier et entrer un nom de cours.');
  //     return;
  //   }

  //   this.coursService.uploadFile(this.selectedFile, this.nomCours)
  //     .subscribe(
  //       response => {
  //         alert('Fichier uploadé avec succès');
  //         console.log(response);
  //       },
  //       error => {
  //         console.error('Erreur lors de l\'upload du fichier', error);
  //         alert('Une erreur est survenue lors de l\'upload du fichier.');
  //       }
  //     );
  // }


  //  selectedFiles: File[] = [];
  // nomCours!: string ;
  // idCycle!: number;
  // message: string = '';


  // onFileSelected(event: any): void {
  //   this.selectedFiles = Array.from(event.target.files);
  // }

  // onUpload(): void {
  //   if (this.selectedFiles.length > 0 && this.nomCours && this.idCycle) {
  //     const formData = new FormData();
  //     formData.append('nomCours', this.nomCours);

  //     this.selectedFiles.forEach(file => {
  //       formData.append('fichiers', file);
  //     });

  //     this.coursService.uploadFilesAndAssociateWithCycle(formData, this.idCycle)
  //       .subscribe(
  //         response => this.message = 'Fichiers uploadés avec succès',
  //         error => this.message = 'Échec de l\'upload des fichiers'
  //       );
  //   } else {
  //     this.message = 'Veuillez remplir tous les champs';
  //   }
  // }

  // selectedFiles!: FileList;
  // nomCours!: string;
  // idCycle!: number;

  // selectedFiles!: FileList ;
  // nomCours!: string;
  // selectedFiles: File[] = []; // Initialisation avec un tableau vide
  // nomCours: string = '';
  // idCycle: number | null = null;
  /*ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('idCycle');
      if (id !== null) {
        this.idCycle = +id; // Convertit le paramètre en nombre
      } else {
        console.error('ID de cycle non trouvé dans les paramètres de l\'URL.');
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }
  onUpload() {
    if (!this.idCycle) {
      console.error('idCycle is null. Please select a cycle ID.');
      return;
    }
  
    const formData: FormData = new FormData();
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('fichiers', this.selectedFiles[i], this.selectedFiles[i].name);
      }
    }
    formData.append('nomCours', this.nomCours);
    formData.append('idCycle', this.idCycle.toString());
  
    this.coursService.onUpload(formData).subscribe(
      (response: any) => {
        console.log('Upload response:', response);
        // Afficher un message de succès ou effectuer des actions supplémentaires si nécessaire
      },
      (error: any) => {
        console.error('Upload error:', error);
        if (error.status === 400) {
          console.error('Bad request. Check server logs for details.');
          // Afficher un message d'erreur ou des instructions pour l'utilisateur
        } else {
          // Gérer d'autres types d'erreurs HTTP si nécessaire
        }
      }
    );
  }*/
  
  }

