import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorFourFourPageRoutingModule } from './error-four-four-routing.module';

import { ErrorFourFourPage } from './error-four-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorFourFourPageRoutingModule
  ],
  declarations: [ErrorFourFourPage]
})
export class ErrorFourFourPageModule {}
