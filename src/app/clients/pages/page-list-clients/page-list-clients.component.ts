import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public collection: Client[];
  public headers: string[];
  public obs: string[];
  public title: string;
  public subtitle: string;
  // public states = Object.values(State);
  public states = StateClient;
  constructor(
    private cs: ClientsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((datas) => {
      console.log(datas);
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });
    this.cs.collection.subscribe((data) => {
      this.collection = data;
    });
    this.headers = [
      'Profil',
      'Name',
      'Email',
      'State'
    ];
  }

  changeState(itemNikki: Client, event) {
    // console.log(event.target.value);
    this.cs.update(itemNikki, event.target.value).subscribe((res: Client) => {
      // console.log(res);
      itemNikki.state = res.state;
    });
  }


}
