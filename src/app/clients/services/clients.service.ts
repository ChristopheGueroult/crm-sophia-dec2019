import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection$: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }

  // get collection
  public get collection(): Observable<Client[]> {
    return this.pCollection$;
  }

  // set collection
  public set collection(col: Observable<Client[]>) {
    this.pCollection$ = col;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // add item in collection
  public add(item: any) {
    console.log(item.image);

    item.image = item.image.replace('C:\\fakepath\\', '../../../assets/img/');
    return this.http.post(`${this.urlApi}/clients`, item);
  }

  // public uploadImage(image: File): Observable<any> {
  //   const formData = new FormData();

  //   formData.append('image', image);

  //   return this.http.post('/api/v1/image-upload', formData);
  // }

  // update item in collection
  public update(item: Client, state: StateClient) {
    const obj = {...item};
    obj.state = state;
    return this.http.patch(`${this.urlApi}/clients/${item.id}`, obj);
  }

  // delete item in collection

  // get item by id
}
