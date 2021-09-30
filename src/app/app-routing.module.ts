import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneBookFormComponent } from './phone-book-form/phone-book-form.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';

const routes: Routes = [
  {path:'users/functionadd/:id',component:PhoneBookFormComponent},
  {path:'',component:PhoneBookComponent},
  {path:'users/functionupdate/:id/:number',component:PhoneBookFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
