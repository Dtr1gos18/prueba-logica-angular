import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-calorias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-calorias.component.html',
  styleUrl: './formulario-calorias.component.css'
})
export class FormularioCaloriasComponent {
  formulario: FormGroup;
  calorias: number | null = null;

  constructor(private readonly formularioBuilder: FormBuilder) {
    this.formulario = this.formularioBuilder.group({
      sistema: ['imperial', Validators.required],
      edad: ['', [Validators.required, Validators.min(16), Validators.max(105)], ],
      peso: ['', [Validators.required, Validators.min(40.5), Validators.max(300)], ],
      altura: ['', [Validators.required, Validators.min(140), Validators.max(225)], ],
    });

    this.formulario.valueChanges.subscribe(() => {
      this.calcularCalorias();
    });
  }

  calcularCalorias() {
    if (this.formulario.valid) {
      const { sistema, edad, peso, altura } = this.formulario.value;

      let pesoImperial = peso;
      let alturaImperial = altura;

      if (sistema === 'decimal') {
        pesoImperial = peso * 2.20462;
        alturaImperial = altura * 0.393701;
      }

      let factor = 1;
      if (pesoImperial < 165) {
        factor = 1.6;
      } else if (pesoImperial <= 200) {
        factor = 1.4;
      } else if (pesoImperial <= 220) {
        factor = 1.2;
      }

      this.calorias =
        (10 * pesoImperial + 6.25 * alturaImperial - 10 * edad + 5) * factor;
    } else {
      this.calorias = null;
    }
  }
}
