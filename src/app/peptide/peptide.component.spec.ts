import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeptideComponent } from './peptide.component';

describe('PeptideComponent', () => {
  let component: PeptideComponent;
  let fixture: ComponentFixture<PeptideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeptideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeptideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
