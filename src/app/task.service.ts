import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  createTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  getTaskById(taskId: number): Task | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }

  changeTaskStatus(taskId: number, newStatus: string) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = newStatus;
    }
  }
  updateTask(updatedTask: Task): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
    }
  }
  editTask(task: Task) {
    const i = this.tasks.findIndex((t) => t.id === task.id);
    if (i !== -1) {
      this.tasks[i] = task;
    }
  }
  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number | undefined) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    alert('Are you sure?')
  }
}