import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  // public collection: Prestation[];
  public headers: string[];
  public obs: string[];
  public title: string;
  public subtitle: string;
  // public states = Object.values(State);
  public states = State;
  // private sub: Subscription;
  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((datas) => {
      // console.log(datas);
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });
    this.collection$ = this.ps.collection;
    // this.ps.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  changeState(itemNikki: Prestation, event) {
    // console.log(event.target.value);
    this.ps.update(itemNikki, event.target.value).subscribe((res: Prestation) => {
      // console.log(res);
      itemNikki.state = res.state;
    });
  }

  popIn() {
    console.log('ok to generate popIn with a service');
  }

}
