import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByContinentComponent } from './by-continent.component';

describe('ByContinentComponent', () => {
  let component: ByContinentComponent;
  let fixture: ComponentFixture<ByContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByContinentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
