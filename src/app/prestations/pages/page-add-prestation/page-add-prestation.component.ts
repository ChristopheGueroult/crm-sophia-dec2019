import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public init = new Prestation();
  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });
  }

  public addItemNikki(item: any) {
    this.ps.add(item).subscribe((res) => {
      console.log(res);
      // traiter res api
      // this.router.navigate(['prestations']); // redirection classique
      this.router.navigate(['../'], {relativeTo: this.route}); // redirection relative
    });
  }

}
