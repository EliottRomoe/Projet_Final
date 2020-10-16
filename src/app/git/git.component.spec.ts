import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GITComponent } from './git.component';

describe('GITComponent', () => {
  let component: GITComponent;
  let fixture: ComponentFixture<GITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
