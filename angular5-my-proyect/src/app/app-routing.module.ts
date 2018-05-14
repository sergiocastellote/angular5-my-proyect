import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CyclistFormComponent }      from './cyclist-form/cyclist-form.component';
import { CyclistListComponent }      from './cyclist-list/cyclist-list.component';


const routes: Routes = [
  { path: 'form', component: CyclistFormComponent },
  { path: 'list', component: CyclistListComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }


