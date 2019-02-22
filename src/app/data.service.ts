import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



// using a shared service you can pass data between almost any unrelated component //

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  private messageSource = new BehaviorSubject<string>("default message");
  sharedMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  };

}
