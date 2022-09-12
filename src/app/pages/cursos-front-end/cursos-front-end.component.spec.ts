import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFrontEndComponent } from './cursos-front-end.component';

describe('CursosFrontEndComponent', () => {
  let component: CursosFrontEndComponent;
  let fixture: ComponentFixture<CursosFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosFrontEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
