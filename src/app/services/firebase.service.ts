import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from 'src/app/models/item.model';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getItems(){
    return this.db.collection<Item>('items').valueChanges({idField: 'id'});
  }

  createItem(item: Item){
    return this.db.collection<Item>('items').add({
      name: item.name,
      type: item.type,
      locationId: item.locationId
    });
  }

  updateItem(item: Item){
    console.log(item);
    this.db.doc('items/' + item.id).update(item);
  }

  deleteItem(itemId: string){
    this.db.doc('items/' + itemId).delete();
  }

  getLocations(){
    return this.db.collection<Location>('locations').valueChanges({idField: 'id'});
  }

  createLocation(location: Location){
    return this.db.collection('locations').add(location);
  }

  deletelocation(locationId: string){
    this.db.doc('locations/' + locationId).delete();
  }

}
