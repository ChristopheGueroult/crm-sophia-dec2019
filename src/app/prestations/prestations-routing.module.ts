import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const routes: Routes = [
  { path: '', component: PagePrestationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrestationsRoutingModule { }
