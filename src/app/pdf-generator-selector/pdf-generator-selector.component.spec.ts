import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGeneratorSelectorComponent } from './pdf-generator-selector.component';

describe('PdfGeneratorSelectorComponent', () => {
  let component: PdfGeneratorSelectorComponent;
  let fixture: ComponentFixture<PdfGeneratorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfGeneratorSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfGeneratorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
