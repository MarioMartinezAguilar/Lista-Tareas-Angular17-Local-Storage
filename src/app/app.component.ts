import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listaTareas:string[] = [];
  nuevaTarea:string = '';

  //aplicamos la inyeccion del servicio

  private _tareasService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }
  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = ''; //vaciamos el input
    this.listaTareas = this._tareasService.getTareas();
  }
  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }

}
