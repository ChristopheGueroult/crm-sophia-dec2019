import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const routes: Routes = [
  {
    path: '',
    component: PageListClientsComponent,
    data: {title: 'Clients', subtitle: 'Tous les clients'}
  },
  {
    path: 'add',
    component: PageAddClientComponent,
    data: {title: 'Clients', subtitle: 'Ajouter un client'}
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClientsRoutingModule { }
