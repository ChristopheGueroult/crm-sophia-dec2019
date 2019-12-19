import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  @HostBinding('class') tdClass: string;
  constructor() {
  }

  ngOnChanges() {
    console.log(this.appState);
    this.tdClass = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}

// if state === Option => state-option
// if state === Annule => state-annule
// if state === Confirmé => state-confirme
// Binder la propriété class du host element (td) avec ce string
