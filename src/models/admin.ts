import { CycleEntity } from './cycle';

export interface Admin {
  idAdmin: number;
  email: string;
  password: string;
  nomEtPrenom: string;
  tel: number;
  //cycles:CycleEntity;
}
