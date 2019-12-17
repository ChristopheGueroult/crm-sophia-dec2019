import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public collection: Prestation[];
  public headers: string[];
  constructor(private ps: PrestationsService) { }

  ngOnInit() {
    this.ps.collection.subscribe((data) => {
      this.collection = data;
    });
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ]
  }

}
