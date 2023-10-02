import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Status } from 'models';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() menuSelection: EventEmitter<Status> = new EventEmitter();
  selected = 2;
  done = Status.Done;
  progress = Status.Todo;
  removed = Status.Removed;

  isSelected(idx: number) {
    return idx === this.selected;
  }

  menuItemClicked(status: Status, idx: number) {
    this.selected = idx;
    this.menuSelection.emit(status);
  }
}
