import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetUploadComponent } from './timesheet-upload.component';

describe('TimesheetUploadComponent', () => {
  let component: TimesheetUploadComponent;
  let fixture: ComponentFixture<TimesheetUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
