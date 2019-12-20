import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { CommentComponent } from './components/comment/comment.component';
import { DetailComponent } from './components/detail/detail.component';
import { SousNavComponent } from './components/sous-nav/sous-nav.component';



@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent, CommentComponent, DetailComponent, SousNavComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplatesModule, ButtonComponent, CommentComponent, DetailComponent, SousNavComponent]
})
export class SharedModule { }
