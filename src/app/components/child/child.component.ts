import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // 
  @Input() sentence: any;
  
  // message to the parent //
  message: any = "( This is the Child's Data )";

  constructor() { }

  ngOnInit() {
  }

}
