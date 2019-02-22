import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  sharedMessage: any;
  editMessage: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.sharedMessage.subscribe(sharedData => this.sharedMessage = sharedData)
  }

  newMessage() {
    this.data.changeMessage('this is the new messageSS!');
  }

  changeMsg(){
    this.data.changeMessage(this.editMessage);
  }

}
