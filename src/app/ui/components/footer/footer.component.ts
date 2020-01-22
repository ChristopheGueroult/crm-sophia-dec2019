import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // public version: number;
  public faHeart = faHeart;
  constructor(public vs: VersionService,  public  translateService: TranslateService) { }

  ngOnInit() {
    // this.version = this.vs.version;
  }

}
