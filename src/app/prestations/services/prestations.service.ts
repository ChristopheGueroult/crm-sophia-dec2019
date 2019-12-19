import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection$: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}/prestations`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }

  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection$;
  }

  // set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection$ = col;
  }

  // add item in collection
  public add(item: any) {
    return this.http.post(`${this.urlApi}/prestations`, item);
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    const obj = {...item};
    obj.state = state;
    return this.http.patch(`${this.urlApi}/prestations/${item.id}`, obj);
  }

  // delete item in collection

  // get item by id
}
