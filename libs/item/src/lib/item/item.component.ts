import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Status, Task } from 'models';

@Component({
  selector: 'lib-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() updateTask: EventEmitter<Task> = new EventEmitter();
  deleted = Status.Removed;
  completed = Status.Done;
  name = '';

  onClicked(status: boolean) {
    this.task.status = status
      ? this.task?.status === Status.Todo
        ? Status.Done
        : Status.Todo
      : Status.Removed;
    this.updateTask.emit(this.task);
  }

  ngOnInit() {
    this.name = 'item' + this.task?.taskItem;
  }
}
