import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CycleServiceService } from '../cycle-service.service';
import { CycleEntity } from 'src/models/cycle';
import { FormateurService } from '../formateur.service';
import { Observable } from 'rxjs';
import { Formateur } from 'src/models/formateur';

declare var $: any;

@Component({
  selector: 'app-liste-cycle',
  templateUrl: './liste-cycle.component.html',
  styleUrls: ['./liste-cycle.component.css']
})
export class ListeCycleComponent implements OnInit {
  constructor(
    private router: Router,
    private CycleServiceService: CycleServiceService,
    private Formateurservice: FormateurService
  ) { }

  cycletodelete!: CycleEntity;
  cyclee!: CycleEntity;
  formateurs: string[] = [];
  listecycle: CycleEntity[] = [];

  ngOnInit(): void {
    this.loadCycles();
  }

  confirmdelete(cycle: CycleEntity): void {
    this.cycletodelete = cycle;
    $('#deleteModal').modal('show');
  }

  closeDelete(): void {
    $('#deleteModal').modal('hide');
  }

  deletec(): void {
    this.CycleServiceService.deletecycle(this.cycletodelete.idCycle).subscribe(() => {
      console.log("deleted");
      $('#deleteModal').modal('hide');
      window.location.reload();
    });
  }

  confirmationmodifierCycle(idCycle: number): void {
    this.router.navigate(["./modifiercycle", idCycle]);
  }

  loadCycles(): void {
    this.CycleServiceService.getlistecycle().subscribe(
      (cycles) => {
        this.listecycle = cycles || []; // Ensure listecycle is always an array
        this.loadFormateursForCycles();
      },
      (error) => {
        console.error('Erreur lors du chargement des cycles:', error);
      }
    );
  }

  loadFormateursForCycles(): void {
    if (this.listecycle && this.listecycle.length > 0) {
      this.listecycle.forEach((cyclee: CycleEntity) => {
        const idFormateur = cyclee.formateurs?.idFormateur ?? null;

        if (idFormateur !== null) {
          this.CycleServiceService.getFormateurById(idFormateur).subscribe(
            (formateur) => {
              cyclee.formateurs = formateur;
            },
            (error) => {
              console.error(`Erreur lors du chargement du formateur pour le cycle ${cyclee.idCycle}:`, error);
            }
          );
        } else {
          console.warn(`Cycle ${cyclee.idCycle} n'a pas de formateur associé ou formateur.idFormateur est null`);
        }
      });
    } else {
      console.warn('La liste des cycles est vide ou non initialisée');
    }
  }
}
