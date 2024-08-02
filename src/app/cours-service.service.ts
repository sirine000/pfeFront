import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {


  private coursUrl = 'http://localhost:8082/cours'; 

  constructor(private http: HttpClient) { }

  
  // uploadFile(file: File, nomCours: string): Observable<string> {
  //   const formData: FormData = new FormData();
  //   formData.append('fichier', file, file.name);
  //   formData.append('nomCours', nomCours);

  //   return this.http.post(`${this.coursUrl}/upload`, formData, {
  //     responseType: 'text'  // Spécifiez que la réponse est de type texte
  //   });
  
  // uploadFileAndAssociateWithCycle(file: File, nomCours: string, idCycle: number): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('fichier', file);
  //   formData.append('nomCours', nomCours);
  //   formData.append('idCycle', idCycle.toString());

  //   return this.http.post(`${this.coursUrl}/upload`, formData, {
  //     responseType: 'text' // or 'json' if you want to parse the response as JSON
  //   });
  // }

  // uploadFilesAndAssociateWithCycle(formData: FormData, idCycle: number): Observable<any> {
  //   return this.http.post(`${this.coursUrl}/upload?idCycle=${idCycle}`, formData, {
  //     responseType: 'text' // or 'json' if you want to parse the response as JSON
  //   });
  // }


  selectedFiles!: FileList;
  nomCours!: string;
  idCycle!: number;


  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  // onUpload() :Observable<any> {
  //   const formData: FormData = new FormData();
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     formData.append('fichiers', this.selectedFiles[i], this.selectedFiles[i].name);
  //   }
  //   formData.append('nomCours', this.nomCours);
  //   formData.append('idCycle', this.idCycle.toString());

  //   this.http.post(this.coursUrl+"./uploadss", formData)
  //     .subscribe(response => {
  //       console.log('Upload response:', response);
  //     });

  //     return this.http.post(`${this.baseUrl}/inserercyclecours`, formData);
  // }
  private coursU = 'http://localhost:8082/cours/inserercyclecours'; 
  uploadMultipleFiles(files: File[], nomCours: string, idCycle: number): Observable<any> {
    const formData: FormData = new FormData();
    files.forEach(file => formData.append('fichiers', file));
    formData.append('nomCours', nomCours);
    formData.append('idCycle', idCycle.toString());

    return this.http.post(this.coursU, formData, {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data'
      }),
      responseType: 'text'
    });
  }

  // onUpload(formData: FormData): Observable<any> {
  //   return this.http.post(`${this.coursUrl}/inserercyclecours`, formData);
  // }
}
