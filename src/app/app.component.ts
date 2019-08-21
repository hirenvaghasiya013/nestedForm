import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  @ViewChild(ChildComponent) childComponent: ChildComponent;

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
    state: { id:2, name: 's3'  }
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      mainInput: '',
      country: ''
    });
    this.person.country = this.countries.filter(c => c.id === this.person.country.id)[0];
  }

  ngAfterViewInit() {
    this.form.addControl('childForm', this.childComponent.form);
    this.childComponent.form.setParent(this.form);
    console.log(this.form);
  }

  saveData() {
    console.log(this.form.value.mainInput, this.form.value.country, this.form.value.childForm.childInput);
  }

}
