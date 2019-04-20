import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

import {Observable, fromEvent} from 'rxjs';

@Component({
  selector: 'app-mta-card',
  templateUrl: './mtacard.component.html',
  styleUrls: ['./mtacard.component.css']
})
export class MTAcardComponent implements OnInit {

  @Input() value: string;
  @ViewChild('valueField') valueField: ElementRef;
  @ViewChild('refreshIcon') refreshIcon: ElementRef;

  @Output() newCard = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.valueField.nativeElement.innerHTML = this.value;

    fromEvent(this.refreshIcon.nativeElement, 'click').subscribe(event => {
      this.newCard.emit(true);
    })
  }

}