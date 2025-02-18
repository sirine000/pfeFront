import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Formateur } from 'src/models/formateur';

@Component({
  selector: 'app-formateur-menu',
  templateUrl: './formateur-menu.component.html',
  styleUrls: ['./formateur-menu.component.css'],
})
export class FormateurMenuComponent implements OnInit {
  formateurconnecte!: Formateur;
  ngOnInit(): void {
    const formateurdata = localStorage.getItem('formateur');
    if (formateurdata) {
      this.formateurconnecte = JSON.parse(formateurdata);
    }
  }

  constructor(private router: Router) {}
  idFormateur!: number;
  gotocycledeformateur() {
    this.router.navigate(['/formateurscycles']);
  }
  deconnection() {
    localStorage.removeItem('formateur');
    localStorage.removeItem('connecté!');

    this.gobackconnecte();

    // window.location.reload();
  }
  gobackconnecte() {
    this.router.navigate(['./seconnecterformateur']);
  }
  goToCompte() {
    this.router.navigate(['/compteFormateur']);
  }
}
