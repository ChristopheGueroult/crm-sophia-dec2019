import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public version: number;
  constructor(private vs: VersionService) { }

  ngOnInit() {
    this.version = this.vs.version;
  }

  public upgradeVersion() {
    this.vs.upgrade();
  }
}
