import { CycleEntity } from "./cycle";

export interface Formateur{
    idFormateur:number ;
    email:string;
    password:string;
    nomEtPrenom: string;
    tel:number;
  conf_password: string;
  photo: any;
    //cycles:CycleEntity;
}
