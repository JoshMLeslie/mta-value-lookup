import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../material-module';

import { AppComponent, BottomSheetOverviewExampleSheet } from './app.component';
import {CardInputModule} from './card-input/card-input.module';

import {MatBottomSheetModule} from '@angular/material';

@NgModule({
  imports:      [
    BrowserModule
    , CommonModule
    , FormsModule 
    , BrowserAnimationsModule
    , FormsModule
    , HttpClientModule
    , MaterialModule
    , MatNativeDateModule
    , ReactiveFormsModule
    , CardInputModule
    , MatBottomSheetModule
  ],
  entryComponents: [ BottomSheetOverviewExampleSheet ],
  declarations: [ AppComponent, BottomSheetOverviewExampleSheet ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
