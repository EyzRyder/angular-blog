import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from './components/menu/menu.module';
import { CardsModule } from './components/cards/cards.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuModule, CardsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 'app.component.responsive.scss']
})
export class AppComponent {
  title = 'angular-blog';
}
