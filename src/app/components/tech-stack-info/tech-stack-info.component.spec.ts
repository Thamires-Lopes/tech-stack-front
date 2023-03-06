import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackInfoComponent } from './tech-stack-info.component';

describe('TechStackInfoComponent', () => {
  let component: TechStackInfoComponent;
  let fixture: ComponentFixture<TechStackInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStackInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
