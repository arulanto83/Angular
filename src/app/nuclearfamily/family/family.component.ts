import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  childcount=4;
  constructor() { }

  ngOnInit() {
  }

}
