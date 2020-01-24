import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsPageRoutingModule } from './docs-routing.module';

import { DocsPage } from './docs.page';
import { DocsItemComponent } from 'src/app/components/docs-item/docs-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsPageRoutingModule
  ],
  declarations: [DocsPage, DocsItemComponent]
})
export class DocsPageModule {}
