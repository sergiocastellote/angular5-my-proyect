import { CyclistService } from './cyclist.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { CyclistFormComponent } from './cyclist-form/cyclist-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CyclistListComponent } from './cyclist-list/cyclist-list.component';
import { FormsModule } from '@angular/forms';
import { CyclistFornUpdateComponent } from './cyclist-forn-update/cyclist-forn-update.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CyclistFormComponent,
    CyclistListComponent,
    CyclistFornUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  providers: [CyclistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
