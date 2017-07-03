import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicliDeVidaComponent } from './cicli-de-vida.component';

describe('CicliDeVidaComponent', () => {
  let component: CicliDeVidaComponent;
  let fixture: ComponentFixture<CicliDeVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicliDeVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicliDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
