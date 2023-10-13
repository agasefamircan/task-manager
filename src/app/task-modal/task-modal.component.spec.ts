import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreationDialog } from './task-modal.component';
describe('TaskModalComponent', () => {
  let component: TaskCreationDialog;
  let fixture: ComponentFixture<TaskCreationDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCreationDialog]
    });
    fixture = TestBed.createComponent(TaskCreationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
