import { Component } from '@angular/core';
import { CardsModule } from '../../components/cards/cards.module';
import { MenuModule } from '../../components/menu/menu.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuModule, CardsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./home.component.responsive.scss']
})
export class HomeComponent {

}
