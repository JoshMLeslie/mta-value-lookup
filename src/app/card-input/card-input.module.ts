import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInputComponent } from './card-input.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../material-module';
import {MTAcardModule} from './mtacard/mtacard.module'


@NgModule({
  imports: [
    CommonModule
    , MaterialModule
    , FormsModule
    , ReactiveFormsModule
    , MTAcardModule
  ]
  ,declarations: [CardInputComponent]
  ,exports: [CardInputComponent]
})
export class CardInputModule { }
