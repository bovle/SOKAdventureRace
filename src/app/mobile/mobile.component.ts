import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatDialog } from '@angular/material/dialog'
import { Location } from '../models/location.model';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { LocationDialogComponent } from '../location-dialog/location-dialog.component';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;

  locations: Location[];
  selectedLocation: Location;
  barcodeValue: string;
  selectingLocation = false;

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.firebaseService.getLocations().subscribe(data => {
      this.locations = data;
    });
  }

  scanSuccessHandler(result){
    if(!this.selectingLocation && result){
      this.selectingLocation = true;
      this.firebaseService.getItem(result).subscribe(data =>{
        
        console.log(data.name);
        console.log(this.selectedLocation.name);
        const dialogRef = this.dialog.open(LocationDialogComponent, {
          width: '250px',
          data: this.locations
        });
  
        dialogRef.afterClosed().subscribe(locationId => {
          if(locationId){
            console.log(result);
            console.log(locationId);
          }
        },(error) =>{
        },() =>{
          this.selectingLocation = false;
        });
      },(error) =>{
        this.selectingLocation = false;
      });
    }
  }

}
