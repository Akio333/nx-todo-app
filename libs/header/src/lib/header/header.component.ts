import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'menu';
import { DateComponent } from 'date'

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, DateComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
