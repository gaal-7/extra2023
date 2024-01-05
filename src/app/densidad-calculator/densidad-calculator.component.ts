import { Component } from '@angular/core';

@Component({
  selector: 'app-densidad-calculator',
  templateUrl: './densidad-calculator.component.html',
  styleUrls: ['./densidad-calculator.component.css']
})
export class DensidadCalculatorComponent {
  masa: number = 0; 
  volumen: number = 0;  
  densidad: number | null = null; 

  calcularDensidad() {
    if (this.masa && this.volumen) {
      this.densidad = this.masa / this.volumen;
    } else {
      this.densidad = null;
    }
  }
}
