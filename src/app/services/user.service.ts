import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  //providedIn: 'root': Indica que el servicio es singleton, proporciona en el nivel raíz 
  //de la aplicación, está disponible en toda la aplicación.
  providedIn: 'root'
})
export class UserService {

  private users: User []= [{
    id:1,
    name: 'Francisco',
    lastName: 'Etxeberria',
    email: 'fran@gmail.com',
    userName: 'franbronx',
    password:'fran1234'
  },{
    id:2,
    name: 'Laura',
    lastName: 'Cortes',
    email: 'lau@gmail.com',
    userName: 'laurabronx',
    password:'lau1234'
  },{
    id:3,
    name: 'Paca',
    lastName: 'Heredia',
    email: 'paqui@gmail.com',
    userName: 'paquibronx',
    password:'paqui1234'
  }]; 

  constructor() {  }

  //Los Observavbles o se activan por si mismo hasta que te subscribes a ellos.
  findAll():Observable <User[]>{
  return of(this.users);
  }
}
