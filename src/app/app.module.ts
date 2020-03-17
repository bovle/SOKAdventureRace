import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';



import { ItemListComponent } from './item-list/item-list.component';
import { AppComponent } from './app.component';

import { FirebaseService } from "./services/firebase.service";

import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDialogComponent } from './location-dialog/location-dialog.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AdminComponent,
    LocationsComponent,
    LocationDialogComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ZXingScannerModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
