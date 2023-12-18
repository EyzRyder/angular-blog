import { Component } from '@angular/core';
import { CardsModule } from '../../components/cards/cards.module';
import { MenuModule } from '../../components/menu/menu.module';
import { dataFake } from '../../data/placeholderData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuModule, CardsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./home.component.responsive.scss']
})
export class HomeComponent {
  bigNews = dataFake[0];
  news = dataFake.filter(data=> data.id!=='1')
}
