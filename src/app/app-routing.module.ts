import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication-routing.module').then((m) => m.AuthenticationRoutingModule),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./management/management-routing.module').then((m) => m.ManagementRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
