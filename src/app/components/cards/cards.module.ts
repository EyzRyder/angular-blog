import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './big-card/big-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BigCardComponent,
    SmallCardComponent,
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    BigCardComponent,
    SmallCardComponent
  ]
})
export class CardsModule { }
