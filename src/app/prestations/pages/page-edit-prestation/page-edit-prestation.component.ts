import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public init$: Observable<Prestation>;
  private id: string;
  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.init$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get('id');
        return this.ps.getItemById(params.get('id'))
      }
      )
    );

    this.route.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });
  }

  public updateItemNikki(item: any) {
    item.id = this.id;
    this.ps.update(item).subscribe((data) => {
      this.router.navigate(['prestations']);
    });
  }

}
