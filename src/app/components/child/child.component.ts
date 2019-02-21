import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // container for parent to use //
  @Input() sentence: any;
  // container for child to store eventEmitter object //
  @Output() messageEvent = new EventEmitter<string>();
  
  // message to the parent //
  message: any = "( This is the Child's Data )";

  evtMessage: any = "( This is an Event From the Child )"


  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.evtMessage);
  }

  ngOnInit() {
  }

}
