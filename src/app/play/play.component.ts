import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  // Formulario Reactivo
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
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

  onSubmit() {
    console.log(this.form)
    if (this.form.valid) {
      alert('Guardado con exito')
    } else {
      alert('No registrado')
    }
  }
}
