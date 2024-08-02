import { Formateur } from "./formateur";

export interface CycleEntity {
    idCycle : number;
    nomCycleDeFormation : string;
    description : String;
    prix: number;
   dateFin: Date;
   dateDebut: Date;
   formateurs: Formateur; 

}