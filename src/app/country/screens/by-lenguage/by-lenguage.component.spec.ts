import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLenguageComponent } from './by-lenguage.component';

describe('ByLenguageComponent', () => {
  let component: ByLenguageComponent;
  let fixture: ComponentFixture<ByLenguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByLenguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByLenguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
