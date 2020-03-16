import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent {
  barcodeScannerOptions: BarcodeScannerOptions;
  scannedData = {};

  constructor(
    // private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    private barcodeScanner: BarcodeScanner
  ) {
    // this.initializeApp();
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('ISBN number: ' + JSON.stringify(barcodeData));
      console.log(barcodeData);
      this.scannedData = barcodeData;
    }).catch(error => {
      console.log(error);
    })
  }

}
