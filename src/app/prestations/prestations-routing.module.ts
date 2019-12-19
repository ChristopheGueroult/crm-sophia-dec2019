import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

const routes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: {title: 'Prestations', subtitle: 'Toutes les prestations'}
  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: {title: 'Prestations', subtitle: 'Ajouter une prestation'}
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrestationsRoutingModule { }
