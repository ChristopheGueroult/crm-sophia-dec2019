import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from '../shared/components/comment/comment.component';
import { DetailComponent } from '../shared/components/detail/detail.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import {IsAdminGuard} from '../shared/guards/is-admin.guard';
import {FormNotSaveGuard} from '../shared/guards/form-not-save.guard';

const routes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    canActivate: [  IsAdminGuard],
    data: {title: 'Prestations', subtitle: 'Toutes les prestations'},
    children: [
      { path: '', redirectTo: 'comment', pathMatch: 'full'},
      { path: 'comment', component: CommentComponent},
      { path: 'detail', component: DetailComponent},
    ]

  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: {title: 'Prestations', subtitle: 'Ajouter une prestation'},
    canDeactivate: [FormNotSaveGuard]
  },
  {
    path: 'edit/:id',
    component: PageEditPrestationComponent,
    data: {title: 'Prestations', subtitle: 'Editer une prestation'},
    canDeactivate: [FormNotSaveGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PrestationsRoutingModule { }
