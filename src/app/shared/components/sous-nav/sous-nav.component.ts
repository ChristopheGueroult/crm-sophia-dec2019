import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sous-nav',
  templateUrl: './sous-nav.component.html',
  styleUrls: ['./sous-nav.component.scss']
})
export class SousNavComponent implements OnInit {
  @Input() sousRoutes: {route: string, label: string}[];
  constructor() { }

  ngOnInit() {
  }

}
