import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-td',
  templateUrl: './child-td.component.html',
  styleUrls: ['./child-td.component.css']
})
export class ChildTdComponent implements OnInit {
  @Input('state') states;
  @Input() pdata;  

  constructor() { }

  ngOnInit() {
    this.pdata.state = this.states.filter(c => c.id === this.pdata.country.id)[0];
  }

}
