import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {

  // Definimos la propiedad 'user', que será del tipo 'User'. Esta propiedad se usará para enlazar los datos del formulario
  user: User;

  // Creamos un EventEmitter que se utilizará para emitir un evento cuando se envíen los datos del formulario
  // @Output() significa que este evento será emitido desde el componente hijo (este componente) hacia el componente padre
  @Output() newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  // Constructor de la clase, que inicializa la propiedad 'user' como una nueva instancia de la clase 'User'
  constructor() {
    this.user = new User(); // Inicializamos el objeto 'user' para empezar a usarlo en el formulario
  }

  // Método que será llamado cuando se envíe el formulario (vinculado con (ngSubmit) en la plantilla HTML)
  onSubmit(userForm : NgForm): void {
    if(userForm.valid){
      // Emitimos el evento, pasando el objeto 'user' con los datos del formulario hacia el componente padre
      this.newUserEventEmitter.emit(this.user);
      // Mostramos en la consola del navegador el objeto 'user' con los datos capturados del formulario
      console.log(this.user);
    }
    userForm.reset();
    userForm.resetForm();
  }
}
