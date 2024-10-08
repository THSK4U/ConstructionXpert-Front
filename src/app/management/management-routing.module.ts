import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementComponent} from "./management.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
  {
    path:"", component: ProjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
