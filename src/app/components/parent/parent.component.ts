import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements AfterViewInit {
  
  // sentence to the child //
  sentence:  any = "( This is the Parent's Data )";
  
  // message from the child //
  message: any;
  evtMessage: any;

  // Save Child Component to   //
  @ViewChild(ChildComponent) child;

  constructor() { }

  // ngOnInit() {
  // }

  ngAfterViewInit() {
    this.message = this.child.message;
  }

  receiveMessage($event){
    this.evtMessage = $event;
  }

}
