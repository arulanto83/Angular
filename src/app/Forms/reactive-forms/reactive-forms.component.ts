import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cts-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myForm:any;

  constructor() { }

  ngOnInit() {
    this.myForm=new FormGroup({
      fn:new FormControl("asda", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[a-zA-Z]+$")
      ])),
      score:new FormControl("3", this.scoreValidator),
      hobby:new FormControl()
    })
  }
  scoreValidator=function(control){
    console.log(control);
    if(control.value<10) {
      // return {score:true}
      return {'score':true}
    }
  }
  
  submitForm=function(reactiveForm){
    console.log(reactiveForm);
    console.log(reactiveForm.value);
  }

}
