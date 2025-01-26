import { Component } from '@angular/core';
import { FormularioCaloriasComponent } from "./formulario-calorias/formulario-calorias.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioCaloriasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-tecnica-logica-angular';
}
