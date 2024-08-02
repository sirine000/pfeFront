import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { CycleEntity } from 'src/models/cycle';
import { Formateur } from 'src/models/formateur';

@Injectable({
  providedIn: 'root'
})
export class CycleServiceService {

 private apiUrlcycle="http://localhost:8082/cycle/" 

  constructor(private httpClient:HttpClient) {}

   
getlistecycle():Observable<CycleEntity[]>{
  return this.httpClient.get<CycleEntity[]>(this.apiUrlcycle+"listecycle")
}
   ajoutercycle(cycle:CycleEntity){
 return this.httpClient.post<CycleEntity>(this.apiUrlcycle+"ajoutercycle",cycle)
   }

   
   getnomprof(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.apiUrlcycle)
   }


   deletecycle(idCycle:number) {
    return this.httpClient.delete<CycleEntity>(this.apiUrlcycle+"deletecycle/"+idCycle)
   }

   creercycle_formateur(idFormateur:number,cycle:CycleEntity) {
    return this.httpClient.post<CycleEntity>(this.apiUrlcycle+"ajouterbyidformateur/"+idFormateur,cycle)
  }

  //new
  // ajouterCycleformateur(cycle: CycleEntity): Observable<CycleEntity> {
  //   return this.httpClient.post<CycleEntity>(this.apiUrlcycle+ 'postcycleetformateur', cycle);
  // }

  ajouterCycleformateur(cycle: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrlcycle}postcycleetformateur`, cycle, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  ajoutercycle_formateur(idFormateur: number, cycleToAdd: CycleEntity): Observable<CycleEntity> {
    // Ajoutez le cycleToAdd comme corps de la requête POST
    return this.httpClient.post<CycleEntity>(`${this.apiUrlcycle}ajouterbyidformateur/${idFormateur}`, cycleToAdd)
  }



  getmodifiercycle(idCycle:number,cycle:CycleEntity):Observable<CycleEntity>
  {
    return this.httpClient.put<CycleEntity>(this.apiUrlcycle+"modifiercycle/"+idCycle,cycle)
   }

   getcycleid(idCycle:number): Observable<CycleEntity>{
    return this.httpClient.get<CycleEntity>(this.apiUrlcycle+"getcycleid/"+idCycle)
   }

   ajouterCycleAvecFormateur(idFormateur: number, cycle: CycleEntity): Observable<CycleEntity> {
    const url = `${this.apiUrlcycle}/ajoutercycletest/${idFormateur}`;
    return this.httpClient.post<CycleEntity>(url , cycle);
  }





  getListeFormateurss(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.apiUrlcycle}listenomprofe`);
  }



  getFormateurById(idFormateur: number): Observable<Formateur> {
    return this.httpClient.get<Formateur>(`${this.apiUrlcycle}getnomformateur/${idFormateur}`);
  }

  }

