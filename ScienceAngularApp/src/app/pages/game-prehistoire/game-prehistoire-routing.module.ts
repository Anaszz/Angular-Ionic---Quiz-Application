import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePrehistoirePage } from './game-prehistoire.page';

const routes: Routes = [
  {
    path: '',
    component: GamePrehistoirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePrehistoirePageRoutingModule {}
