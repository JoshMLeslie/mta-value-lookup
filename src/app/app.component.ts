import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  title = 'MTA-Value-Lookup';

  constructor(
    private bottomSheet: MatBottomSheet
    , matIconRegistry: MatIconRegistry
    , domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('mtaCard',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/MTACard.svg")
    );
    matIconRegistry.addSvgIcon('refresh',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/refresh.svg")
    );
  }

  openDisclaimer() {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<h3>Disclaimer: This website is ONLY for demo purposes with no monetary gain. Background color and relevant images are copyright of the NYC MTA.</h3>`,
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}
}
