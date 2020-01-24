import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsDetailsPageRoutingModule } from './docs-details-routing.module';

import { DocsDetailsPage } from './docs-details.page';
import { DocsPrehistoireComponent } from 'src/app/components/docs-prehistoire/docs-prehistoire.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsDetailsPageRoutingModule
  ],
  declarations: [DocsDetailsPage, DocsPrehistoireComponent]
})
export class DocsDetailsPageModule {}
