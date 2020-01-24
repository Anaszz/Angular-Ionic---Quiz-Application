import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMessagesPage } from './profile-messages.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMessagesPageRoutingModule {}
