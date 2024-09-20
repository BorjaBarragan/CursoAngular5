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
    name: 'Pepe',
    lastName: 'Giraldo',
    email: 'pepito@gmail.com',
    userName: 'pepebronx',
    password:'pepito1234'
  },{
    id:2,
    name: 'Laura',
    lastName: 'Bernia',
    email: 'lau@gmail.com',
    userName: 'laurabronx',
    password:'lau1234'
  },{
    id:3,
    name: 'Antonia',
    lastName: 'Morena',
    email: 'anto@gmail.com',
    userName: 'antobronx',
    password:'anto1234'
  }]; 

  constructor() {  }

  //metodo para obtener todos los usuarios
  findAll():Observable <User[]>{
  return of(this.users);
  }
}
