import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';
import { TaskCreationDialog } from '../task-modal/task-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css'],
})
export class TaskManagementComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    deadline: new Date(),
    status: 'To-Do',
  };

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  TaskDialog(editing: boolean = false): void {
    const dialogRef = this.dialog.open(TaskCreationDialog, {
      width: '400px',
      data: { task: this.newTask, editing: editing },
    });

    dialogRef.afterClosed().subscribe((result: Task | undefined) => {
      if (editing) {
        if (result) {
          this.createTask(result);
        }
      }
    });
  }

  editingTask: Task | undefined;
  showEditForm: boolean = false;

  createTask(newTask: Task): void {
    this.taskService.createTask(this.newTask);
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      deadline: new Date(),
      status: 'To-Do',
    };
  }

  changeTaskStatus(taskId: number, newStatus: string) {
    this.taskService.changeTaskStatus(taskId, newStatus);
  }

  getTasks(): Task[] {
    return this.taskService.getTasks();
  }
  editTask(task: Task): void {
    this.showEditForm = true;
    this.editingTask = { ...task };
  }

  saveEditedTask(): void {
    if (this.editingTask) {
      this.taskService.updateTask(this.editingTask);

      this.showEditForm = false;
      this.editingTask = undefined;
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
