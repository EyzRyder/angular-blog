import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    MenuTitleComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuTitleComponent,
    MenuBarComponent
  ]
})
export class MenuModule { }
