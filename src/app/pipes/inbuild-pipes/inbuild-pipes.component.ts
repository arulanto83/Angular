import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuild-pipes',
  templateUrl: './inbuild-pipes.component.html',
  styleUrls: ['./inbuild-pipes.component.css']
})
export class InbuildPipesComponent implements OnInit {
  city="022";
  money=88;
  name='chance-e-ella';
  birthday=new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
