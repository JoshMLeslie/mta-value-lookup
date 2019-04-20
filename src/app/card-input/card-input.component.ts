import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  loadingValue: boolean = false;
  cardNumberInput: string = '';
  remainingValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  getValue(): void {
    this.loadingValue = true;

    this.randFare().subscribe(remainingVal => {
      this.loadingValue = false;
      this.remainingValue = remainingVal
    });
  }

  randFare(): Observable<string> {
    // For demo purposes
    // returns a stringified number <= 10 alike "$x.yz" after 1 second to mock the API call
    return of("$" + (Math.random()*10).toString().slice(0,4)).pipe(delay(1000));
  }

  handleNewCard() {
    this.cardNumberInput = '';
    this.remainingValue = '';
  }

}