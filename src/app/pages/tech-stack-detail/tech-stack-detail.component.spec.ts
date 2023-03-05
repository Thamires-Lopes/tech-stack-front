import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackDetailComponent } from './tech-stack-detail.component';

describe('TechStackDetailComponent', () => {
  let component: TechStackDetailComponent;
  let fixture: ComponentFixture<TechStackDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStackDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
