import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsDetailsPage } from './docs-details.page';

const routes: Routes = [
  {
    path: '',
    component: DocsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsDetailsPageRoutingModule {}
