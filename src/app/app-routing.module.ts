import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KunduppgifterComponent } from './kunduppgifter/kunduppgifter.component';
import { WAPPEASYComponent } from './wapp-easy/wapp-easy.component';
import { GConstentComponent } from './gconstent/gconstent.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', component: KunduppgifterComponent },
  { path: 'WAPPEASY', component: WAPPEASYComponent },
  { path: 'WAPPEASY/GConstent', component: GConstentComponent },
  { path: 'WAPPEASY/GConstent/Upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
