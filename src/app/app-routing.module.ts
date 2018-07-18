import { NgModule } from '@angular/core';
//remove this line below
// import { CommonModule } from '@angular/common';
// add this line below
import {RouterModule, Routes} from  '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';

//
const routes : Routes =[
  // within{} put object
  {path: "", redirectTo:"/home", pathMatch: 'full'}
  {path: "home", component: HomeComponent},
  {path: "create", component: CreateComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
  // declarations: []
})
export class AppRoutingModule { }
