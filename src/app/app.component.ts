import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected edadUno:string = "";
  protected edadDos:string = "";
  protected calcularPromedio() {
    alert(`El promedio es ${(parseInt(this.edadUno) + parseInt(this.edadDos)) / 2}`);
  };
  protected limpiarCuadros(){
    this.edadUno = "";
    this.edadDos = "";
  };
}

export class Usuario {
  protected nombre:string = "";
  protected clave:string = "";
}
