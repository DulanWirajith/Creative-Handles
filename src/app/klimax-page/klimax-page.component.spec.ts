import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimaxPageComponent } from './klimax-page.component';

describe('KlimaxPageComponent', () => {
  let component: KlimaxPageComponent;
  let fixture: ComponentFixture<KlimaxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlimaxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimaxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
