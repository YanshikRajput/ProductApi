import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpsComponent } from './lps.component';

describe('LpsComponent', () => {
  let component: LpsComponent;
  let fixture: ComponentFixture<LpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
