import { Component } from '@angular/core';
import { Status, Task } from 'models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  id = 1;
  taskList: Task[] = [];

  handleCreateItem(isClicked: boolean) {
    if (!isClicked) {
      return;
    }

    this.taskList.push(new Task(this.id, 'New Task', Status.Todo));
    this.id++;
  }

  handleRemoveItem(id: number) {
    this.taskList = this.taskList.filter((item) => id !== item.id);
  }
}
