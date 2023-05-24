import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaysService {

  plays: any[] = [];
  selectedPlay: any = null

  constructor() {
    this.loadPlays();
  }

  private loadPlays() {
    this.plays = [];
    this.plays.push(
      { id: 1, name: 'Patrick', apellido: 'Caiza', direccion: 'Quito', age: 20, birthdate: '2003-02-09', numCedula: '1727627281', numTelefono: '0996504726', estadoCivil: 'Soltero' },
      { id: 2, name: 'Camila', apellido: 'Maldonado', direccion: 'Quito', age: 19, birthdate: '2004-01-06', numCedula: '1755178041', numTelefono: '09654175412', estadoCivil: 'Soltera' },
    );
  }

  // funcion añadir 
  addGame(payLoad: any) {
    this.plays.push(payLoad);
  }

  // funcion actualizar 
  updateGame(id: number, payLoad: any) {
    const index = this.plays.findIndex(x => x.id === id);
    this.plays[index] = payLoad;
  }

  // borrar registro 
  deleteGame(id: number) {
    const index = this.plays.findIndex(x => x.id === id);
    if (index > -1) {
      this.plays.splice(index, 1);
    }
  }

}
