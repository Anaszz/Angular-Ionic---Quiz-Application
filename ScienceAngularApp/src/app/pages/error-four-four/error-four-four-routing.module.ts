import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorFourFourPage } from './error-four-four.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorFourFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorFourFourPageRoutingModule {}
