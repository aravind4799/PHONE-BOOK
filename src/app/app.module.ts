import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { PhoneBookCardComponent } from './phone-book-card/phone-book-card.component';
import { PhoneBookFormComponent } from './phone-book-form/phone-book-form.component';
import {ServicesService} from './services.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook,faTimes,faPenSquare,faPhone,faFrown,faPlus,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    PhoneBookCardComponent,
    PhoneBookFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],

  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faAddressBook,faTimes,faPenSquare,faPhone,faFrown,faPlus,faChevronLeft);
  }

 }
