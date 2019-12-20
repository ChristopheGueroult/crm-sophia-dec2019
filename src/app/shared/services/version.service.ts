import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public version = 1;
  constructor() { }

  public upgrade() {
    this.version ++;
    console.log(this.version);

  }
}
