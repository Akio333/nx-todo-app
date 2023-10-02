import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'menu';
import { DateComponent } from 'date';
import { Status } from 'models';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, DateComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuEvent: EventEmitter<Status> = new EventEmitter();
  menuHandler(status: Status) {
    this.menuEvent.emit(status);
  }
}
