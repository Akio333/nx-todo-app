import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Status, Task } from 'models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {
  @Input() status!: Status;
  currentMenu = Status.Todo;
  id = 1;
  taskList: Task[] = [];

  getList() {
    return this.taskList.filter((item) => item.status === this.currentMenu);
  }

  handleCreateItem(isClicked: boolean) {
    if (!isClicked) {
      return;
    }

    this.taskList.push(new Task(this.id, 'New Task', Status.Todo));
    this.id++;
  }

  handleUpdateTask(task: Task) {
    const index = this.taskList.findIndex((item) => item.id === task.id);
    this.taskList[index] = task;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['status'] &&
      changes['status']?.previousValue != changes['status']?.currentValue
    ) {
      this.currentMenu = this.status;
    }
  }
}
