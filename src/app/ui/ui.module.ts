import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoderbaseUiModule } from '@coderbase/ui';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './components/ui/ui.component';

@NgModule({
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule,
    RouterModule
  ]
})
export class UiModule { }
