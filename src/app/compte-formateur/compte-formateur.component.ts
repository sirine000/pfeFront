import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'src/models/formateur';
import { FormateurService } from '../formateur.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-compte-formateur',
  templateUrl: './compte-formateur.component.html',
  styleUrls: ['./compte-formateur.component.css'],
})
export class CompteFormateurComponent implements OnInit {
  formateurForm: FormGroup;
  formateurId!: number;
  selectedFile: File | null = null;
  photoUrl: string = '';
  imgSrc: string | null = null; // Initialize as null

  constructor(
    private fb: FormBuilder,
    private formateurService: FormateurService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.formateurForm = this.fb.group({
      email: [''],
      nomEtPrenom: [''],
      tel: [''],
      photo: [''],
    });
  }

  ngOnInit(): void {
    const formateur = JSON.parse(localStorage.getItem('formateur') || '');
    this.formateurId = formateur.id_formateur;
    this.formateurForm.patchValue(formateur);
    this.loadFormateur();
  }

  loadFormateur() {
    this.formateurService
      .getbyidformateur(this.formateurId)
      .subscribe((data) => {
        this.formateurForm.patchValue(data);
        if (data.photo) {
          this.imgSrc = 'data:image/jpeg;base64,' + data.photo;
        }
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      // Optionally preview the selected image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadPhoto() {
    if (this.selectedFile) {
      this.formateurService
        .uploadPhoto(this.formateurId, this.selectedFile)
        .subscribe(
          () => {
            this.loadFormateur();
            this.snackBar.open('Photo téléchargée avec succès', 'Fermer', {
              duration: 3000,
            });
          },
          (error: any) => {
            console.log(error);
            this.snackBar.open(
              'Échec du téléchargement de la photo',
              'Fermer',
              {
                duration: 3000,
              }
            );
          }
        );
    }
  }

  updateFormateur(): void {
    const currentFormateur = JSON.parse(
      localStorage.getItem('formateur') || '{}'
    );

    // Fusionner les nouvelles informations avec les anciennes
    const updatedFormateur = {
      ...currentFormateur,
      ...this.formateurForm.value,
    };

    this.formateurService
      .modifierformateur(this.formateurId, updatedFormateur)
      .subscribe(() => {
        localStorage.setItem('formateur', JSON.stringify(updatedFormateur));
        this.snackBar.open('Formateur mis à jour avec succès', 'Fermer', {
          duration: 3000,
        });
      });
  }
}
