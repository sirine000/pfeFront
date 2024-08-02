import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Admin } from 'src/models/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:8082/admin/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const seconnecterUrl =
      this.apiUrl + 'login?email=' + email + '&password=' + password;
    return this.http.get<any>(seconnecterUrl);
  }

  modifierAdmin(idAdmin: number, admin: Admin) {
    return this.http.put<any>(this.apiUrl + 'modifieradmin/' + idAdmin, admin);
  }

  logout() {
    localStorage.removeItem('admin');
  }

  // Check if the user is logged in by verifying the presence of a JWT token
  isLoggedIn(): boolean {
    const admin = localStorage.getItem('admin'); // Assuming you store the token in localStorage
    return !!admin;
  }

}
