import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackAnswersInfoComponent } from './tech-stack-answers-info.component';

describe('TechStackAnswersInfoComponent', () => {
  let component: TechStackAnswersInfoComponent;
  let fixture: ComponentFixture<TechStackAnswersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStackAnswersInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStackAnswersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
