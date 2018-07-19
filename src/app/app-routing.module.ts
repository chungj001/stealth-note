import { NgModule } from "@angular/core";
//remove this line below
// import { CommonModule } from '@angular/common';
// add this line below
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { HomeComponent } from "./home/home.component";
import { MessageListComponent } from "./message-list/message-list.component";

//
const routes: Routes = [
  // within{} put object
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "home2/:id", component: HomeComponent },
  { path: "create", component: CreateComponent },
  { path: "list", component: MessageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule {}
