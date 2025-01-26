import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCaloriasComponent } from './formulario-calorias.component';

describe('FormularioCaloriasComponent', () => {
  let component: FormularioCaloriasComponent;
  let fixture: ComponentFixture<FormularioCaloriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCaloriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
