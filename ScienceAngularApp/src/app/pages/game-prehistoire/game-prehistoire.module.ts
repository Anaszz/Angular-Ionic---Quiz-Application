import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePrehistoirePageRoutingModule } from './game-prehistoire-routing.module';

import { GamePrehistoirePage } from './game-prehistoire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePrehistoirePageRoutingModule
  ],
  declarations: [GamePrehistoirePage]
})
export class GamePrehistoirePageModule {}
