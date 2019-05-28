import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KunduppgifterComponent } from './kunduppgifter/kunduppgifter.component';
import { WAPPEASYComponent } from './wapp-easy/wapp-easy.component';
import { GConstentComponent } from './gconstent/gconstent.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KunduppgifterComponent,
    WAPPEASYComponent,
    GConstentComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { templateForm(value: any) {alert(JSON.stringify(value)); } }
