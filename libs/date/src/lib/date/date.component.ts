import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  currentDate = new Date();
  month = this.currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  date = this.currentDate.getDate();
}
