import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MobileComponent } from './mobile/mobile.component'


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: MobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
