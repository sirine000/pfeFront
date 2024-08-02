import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FormateurService } from '../formateur.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-compte-admin',
  templateUrl: './compte-admin.component.html',
  styleUrls: ['./compte-admin.component.css'],
})
export class CompteAdminComponent implements OnInit {
  adminForm: FormGroup;
  adminId!: number;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.adminForm = this.fb.group({
      email: [''],
      nomEtPrenom: [''],
      tel: [''],
    });
  }

  ngOnInit(): void {
    const admin = JSON.parse(localStorage.getItem('admin') || '');
    this.adminId = admin.id_admin;
    this.adminForm.patchValue(admin);
  }

  updateAdmin(): void {
    const currentAdmin= JSON.parse(
      localStorage.getItem('admin') || '{}'
    );

    // Fusionner les nouvelles informations avec les anciennes
    const updatedAdmin = {
      ...currentAdmin,
      ...this.adminForm.value,
    };

    this.adminService
      .modifierAdmin(this.adminId, updatedAdmin)
      .subscribe(() => {
        localStorage.setItem('admin', JSON.stringify(updatedAdmin));
        this.snackBar.open('Admin mis à jour avec succès', 'Fermer', {
          duration: 3000,
        });
      });
  }
}
