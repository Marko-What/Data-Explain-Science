import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseLabelsComponent } from './database-labels.component';

describe('DatabaseLabelsComponent', () => {
  let component: DatabaseLabelsComponent;
  let fixture: ComponentFixture<DatabaseLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
