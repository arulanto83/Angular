import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { setClassMetadata } from '@angular/core/src/render3';

@Component({
  selector: 'cts-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger("animateParagraph", [
      state("one",style({color:'red', transform: 'scale(1)', letterSpacing:'10px'})),
      state("two",style({color:'green', transform: 'scale(2)', letterSpacing:'-1px'})),
      transition('one <-> two', animate('250ms ease-in'))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  myState="two";

  animateText=function(){
    this.myState=this.myState==="two" ? "one":"two";
  }

  constructor() { }

  ngOnInit() {
  }

}
