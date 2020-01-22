import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  // public version: number;
  public faHeart = faHeart;
  constructor(public vs: VersionService) { }

  ngOnInit() {
    this.title = 'Nikki\'s App';
    // this.version = this.vs.version;
  }



}
