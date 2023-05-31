import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaysService } from '../services/plays.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  // Formulario Reactivo
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private playService: PlaysService ) {
    if (this.playService.selectedPlay){
      this.form = formBuilder.group({
        id:[this.playService.selectedPlay.id],
        name:[this.playService.selectedPlay.name],
        apellido:[this.playService.selectedPlay.apellido],
        direccion:[this.playService.selectedPlay.direccion],
        age:[this.playService.selectedPlay.age],
        birthdate:[this.playService.selectedPlay.birthdate],
        numCedula:[this.playService.selectedPlay.numCedula],
        numTelefono:[this.playService.selectedPlay.numTelefono],
        estadoCivil:[this.playService.selectedPlay.estadoCivil]
      })
    } else{
      this.form = formBuilder.group({
        id: [0],
        name: ['', [Validators.required, Validators.minLength(3)]],
        apellido: ['', [Validators.required, Validators.minLength(3)]],
        direccion: ['', [Validators.required, Validators.minLength(5)]],
        age: ['', [Validators.required, Validators.min(2)]],
        birthdate: [new Date()],
        numCedula: ['', [Validators.required, Validators.min(10)]],
        numTelefono: ['', [Validators.required, Validators.min(10)]],
        estadoCivil: ['', [Validators.required, Validators.minLength(3)]],
      })
    }
  }

  onSubmit() {
    console.log(this.form)
    if (this.form.valid) {
      this.addGames();
      alert('Guardado con exito')
    } else {
      alert('No registrado')
    }
  }

  addGames(){
    this.playService.addGame(this.form.value);
    console.log(this.playService.plays)
  }

  updateGames(){
    this.playService.updateGame(this.idField.value, this.form.value)
    console.log(this.playService.plays)
  }

// get and set

  get idField(){
    return this.form.controls['id'];
  }

  get nameField(){
    return this.form.controls['nameField'];
  }
}
