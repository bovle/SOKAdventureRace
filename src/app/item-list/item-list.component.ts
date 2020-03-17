import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { FirebaseService } from 'src/app/services/firebase.service';
import { Item } from 'src/app/models/item.model';
import { Location } from 'src/app/models/location.model';
import { LocationDialogComponent } from '../location-dialog/location-dialog.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  dataSource = new MatTableDataSource<Item>();
  displayedColumns: string[] = ['name', 'type', 'location', 'actions'];
  locations: Location[]

 // @ViewChild(MatTable) table: MatTable<Item>;

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.firebaseService.getItems().subscribe(data =>{
      this.dataSource.data = data;
    });

    this.firebaseService.getLocations().subscribe(data => {
      this.locations = data;
    })
  }

  onClickAddItem(itemName: string, itemType: string, location: Location) {
    if(itemName && itemType && location){
      this.firebaseService.createItem({
        name: itemName,
        type: itemType,
        locationId: location.id
      });
    }
  }

  onClickDeleteItem(item: Item){
    if(item){
      this.firebaseService.deleteItem(item.id);
    }
  }

  openDialog(item: Item): void {
    const dialogRef = this.dialog.open(LocationDialogComponent, {
      width: '250px',
      data: this.locations
    });

    dialogRef.afterClosed().subscribe(locationId => {
      if(locationId){
        item.locationId = locationId;
        this.firebaseService.updateItem(item)
      }
    });
  }

  getLocation(item: Item){
    var res = this.locations.find(loc => {
      return loc.id === item.locationId;
    });
    if(res)
      return res.name;
    else
      return 'location not found'
  }

}
