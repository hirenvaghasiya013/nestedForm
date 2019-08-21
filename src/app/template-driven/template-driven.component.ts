import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  countries = [
    { id: 0, name: 'c1' },
    { id: 1, name: 'c2' },
    { id: 2, name: 'c3' },
    { id: 3, name: 'c4' }
  ];
  states = [
    { id: 0, name: 's1' },
    { id: 1, name: 's2' },
    { id: 2, name: 's3' },
    { id: 3, name: 's4' }
  ];
  person = {
    mainInput: 'ox',
    country: { id: 1, name: 'c2' },
    childInput: 'rd',
    state: { id:2, name: 's3'  }
  }

  constructor() { }

  ngOnInit() {
    this.person.country = this.countries.filter(c => c.id === this.person.country.id)[0];
  }

  saveData(){
    console.log(this.person);
  }

}
