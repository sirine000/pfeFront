import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FormateurService } from './formateur.service';

@Injectable({
  providedIn: 'root',
})
export class FormateurAuthGuard implements CanActivate {
  constructor(private formateurService: FormateurService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.formateurService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/seconnecterformateur']);
      return false;
    }
  }
}
