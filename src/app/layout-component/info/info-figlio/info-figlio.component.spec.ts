import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFiglioComponent } from './info-figlio.component';

describe('InfoFiglioComponent', () => {
  let component: InfoFiglioComponent;
  let fixture: ComponentFixture<InfoFiglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFiglioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
