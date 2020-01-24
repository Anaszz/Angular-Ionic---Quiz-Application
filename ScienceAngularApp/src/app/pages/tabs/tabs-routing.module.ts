import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { TabsPageRouterModule } from './tabs-page-router.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    TabsPageRouterModule],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
