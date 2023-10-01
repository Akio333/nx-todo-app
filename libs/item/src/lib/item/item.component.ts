import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'models';

@Component({
  selector: 'lib-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() removeTask: EventEmitter<number> = new EventEmitter();
  name = '';

  onRemoveClicked() {
    this.removeTask.emit(this.task?.id);
  }

  ngOnInit() {
    this.name = 'item' + this.task?.taskItem;
  }
}
