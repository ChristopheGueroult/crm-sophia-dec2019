import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {FormPrestationComponent} from '../../prestations/components/form-prestation/form-prestation.component';
import {TranslateService} from '@ngx-translate/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormNotSaveGuard implements CanDeactivate<FormPrestationComponent>  {
  constructor(private translate: TranslateService) {

  }

  // tslint:disable-next-line:max-line-length
  canDeactivate(component: FormPrestationComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('can deactivate');
    return  this.translate.get('SURE_TO_LEAVE').pipe(
      map((str ) =>   component.canDeactivate() ? component.canDeactivate() :  confirm(str) )
    );

  }

}
