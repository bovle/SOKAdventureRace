import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Location } from '../models/location.model';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit, AfterViewInit {

  locations: Location[];
  barcodeValue: string;

  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  constructor(private firebaseService: FirebaseService) { }
  
  ngOnInit(): void {
    this.firebaseService.getLocations().subscribe(data => {
      this.locations = data;
    })
  }

  ngAfterViewInit(): void {
    this.barecodeScanner.start();
  }

  onValueChanges(result){
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started){
    console.log(started);
  }

}
