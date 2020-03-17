import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Location } from '../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getLocations().subscribe(data => {
      this.locations = data;
    })
  }

  onClickAddLocation(locationName: string) {
    if(locationName){
      var location: Location = {
        name: locationName
      }
      this.firebaseService.createLocation(location);
    }
  }

  onClickDeleteLocation(location: Location){
    this.firebaseService.deletelocation(location.id);
  }

}
