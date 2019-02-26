import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSassComponent } from './test-sass.component';

describe('TestSassComponent', () => {
  let component: TestSassComponent;
  let fixture: ComponentFixture<TestSassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
