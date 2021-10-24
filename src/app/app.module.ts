import { NgModule } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular/main';

import { AppComponent } from './app.component';
import { MyLinkRendererComponent } from './my-link-renderer.component';
import { CarComponent } from './car.component';
import { BusComponent } from './bus.component';

const appRoutes: Routes = [
  { path: 'car/:car', component: CarComponent },
  { path: 'bus/:bus', component: BusComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([null]),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    BusComponent,
    CarComponent,  
    MyLinkRendererComponent
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ],
  entryComponents: [MyLinkRendererComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
