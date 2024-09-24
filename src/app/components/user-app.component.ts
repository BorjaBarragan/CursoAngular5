import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent implements OnInit {

  title: string = 'Listado de usuarios!'

  users: User[] = [];

  userSelected: User;

  open: boolean = false;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    //Si no llamamos a subscribe, en el observable no emitira los datos.
    this.service.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User): void {
    if (user.id > 0) {
      this.users = this.users.map(u => (u.id == user.id) ? { ...user } : u);
    } else {
      this.users = [...this.users, { ...user }]
      console.log('Se ha añadido un nuevo usuario')
    }
    Swal.fire({
      title: "Guardado!",
      text: "Usuario guardado con éxito!",
      icon: "success"
    });
    this.userSelected = new User();
    this.open = true;
  }

  removeUser(id: number): void {
    Swal.fire({
      title: "Está seguro que desea eliminar?",
      text: "Cuidado, el dato del usuario será eliminado del sistema",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id != id)
        console.log('Se ha eliminado el usuario')
        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado con éxito!",
          icon: "success"
        });
      }
    });
  }

  setSelectedUser(userRow: User): void {
    this.userSelected = { ...userRow };
    this.setOpen();
  }

  //Metodo que nos añade un nuevo usuario y crea una id para el mismo.
  // addUser(user: User) {
  //   this.users = [...this.users, {...user, id: new Date().getTime()}];
  // }

  setOpen(){
    this.open = ! this.open;
  }

}
