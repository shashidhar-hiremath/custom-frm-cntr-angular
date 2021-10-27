import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-cntrol';
  form: FormGroup;

  ngModelCount:number = 0;


  listData = [{
    value: 'ABC',
    name: 'abc'
  },{
    value: 'ABC1111',
    name: 'abc111'
  },{
    value: 'ABC222',
    name: 'abc222'
  }];
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      count:0,
      items: ''
    });
   }
}
