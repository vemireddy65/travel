import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackegesComponent } from './packeges.component';

describe('PackegesComponent', () => {
  let component: PackegesComponent;
  let fixture: ComponentFixture<PackegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
