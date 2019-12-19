import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() init: Client;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  public states = StateClient;
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.form = this.fb.group({
      name: [this.init.name],
      email: [this.init.email],
      image: [this.init.image],
      state: [this.init.state]
    });
  }
  public onClick() {
    // console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }

}
