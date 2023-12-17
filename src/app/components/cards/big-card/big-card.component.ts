import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input()
  photoCover?: string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png";
  @Input()
  cardTitle: string = "";
  @Input()
sunImg: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  Id: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
