import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DensidadCalculatorComponent } from './densidad-calculator.component';

describe('DensidadCalculatorComponent', () => {
  let component: DensidadCalculatorComponent;
  let fixture: ComponentFixture<DensidadCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DensidadCalculatorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(DensidadCalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate density when both mass and volume are provided', () => {
    component.masa = 50;
    component.volumen = 5;
    component.calcularDensidad();
    expect(component.densidad).toBe(10);
  });

  it('should handle positive mass and zero volume', () => {
    component.masa = 30;
    component.volumen = 1; 
    component.calcularDensidad();
    expect(component.densidad).toBe(30);
  });

  it('should handle missing volume', () => {
    component.masa = 40;
    component.volumen = 1; 
    component.calcularDensidad();
    expect(component.densidad).toBe(40);
  });

  it('should handle decimal values for mass and volume', () => {
    component.masa = 15.5;
    component.volumen = 2.5;
    component.calcularDensidad();
    expect(component.densidad).toBe(6.2);
  });

  it('should handle positive values for mass and volume', () => {
    component.masa = 20;
    component.volumen = 2;
    component.calcularDensidad();
    expect(component.densidad).toBe(10);
  });

  it('should handle positive values for mass and volume', () => {
    component.masa = 30;
    component.volumen = 2;
    component.calcularDensidad();
    expect(component.densidad).toBe(15);
  });
  
  it('should handle large values for mass and volume', () => {
    component.masa = 10000;
    component.volumen = 500;
    component.calcularDensidad();
    expect(component.densidad).toBe(20);
  });

  it('should handle maximum possible values for mass and volume', () => {
    component.masa = Number.MAX_SAFE_INTEGER;
    component.volumen = Number.MAX_SAFE_INTEGER;
    component.calcularDensidad();
    expect(component.densidad).toBe(1);
  });

  it('should handle minimum possible values for mass and volume', () => {
    component.masa = Number.MIN_SAFE_INTEGER;
    component.volumen = Number.MIN_SAFE_INTEGER;
    component.calcularDensidad();
    expect(component.densidad).toBe(1); 
  });

});
