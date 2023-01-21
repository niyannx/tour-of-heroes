import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerDetailComponent } from './hero-detail.component';

describe('HerDetailComponent', () => {
  let component: HerDetailComponent;
  let fixture: ComponentFixture<HerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
