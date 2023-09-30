import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'menu';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
