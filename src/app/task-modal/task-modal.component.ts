import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-creation-dialog',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})


export class TaskCreationDialog {
  // newTask: Task;
  selectedTask: Task;
  editing:boolean


  constructor(
    public dialogRef: MatDialogRef<TaskCreationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.newTask = { ...data };
    this.selectedTask = {...data};
    this.editing = !!data;
  }
  getResult(): Task {
    return this.selectedTask;
  }
  getButtonText() {
    return this.editing ? 'Save' : 'Create Task';
  }
  onSubmit(): void {
    this.dialogRef.close(this.selectedTask);
    console.log("btn clicke")
  }
}
