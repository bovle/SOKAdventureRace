import { Location } from './location.model'
import { DocumentReference } from '@angular/fire/firestore';

export class Item {
    id?: string;
    name: string;
    type: string;
    locationId: string;
}
