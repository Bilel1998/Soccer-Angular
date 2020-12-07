import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauUtilisateursComponent } from './tableau-utilisateurs.component';

describe('TableauUtilisateursComponent', () => {
  let component: TableauUtilisateursComponent;
  let fixture: ComponentFixture<TableauUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauUtilisateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
