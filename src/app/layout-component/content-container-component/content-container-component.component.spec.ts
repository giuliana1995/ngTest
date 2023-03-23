import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContainerComponentComponent } from './content-container-component.component';

describe('ContentContainerComponentComponent', () => {
  let component: ContentContainerComponentComponent;
  let fixture: ComponentFixture<ContentContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentContainerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
