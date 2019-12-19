import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() route: string;
  @Input() href: string;
  @Input() click: boolean;
  @Input() label: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('button clicked');
    this.clicked.emit();
  }

}
