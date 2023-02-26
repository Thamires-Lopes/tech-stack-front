import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackListComponent } from './tech-stack-list.component';

describe('TechStackListComponent', () => {
  let component: TechStackListComponent;
  let fixture: ComponentFixture<TechStackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStackListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
