import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  form: FormGroup;
  @Input('state') states;
  @Input() pdata;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      state: '',
      childInput: ''
    });
    this.pdata.state = this.states.filter(s => s.id === this.pdata.state.id)[0];
  }

}
