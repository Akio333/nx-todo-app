import { Component } from '@angular/core';
import { Status } from 'models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  status = Status.Todo;

  menuHandler(status: Status) {
    this.status = status;
  }
}
