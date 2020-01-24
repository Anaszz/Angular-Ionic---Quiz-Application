import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMessagesPageRoutingModule } from './profile-messages-routing.module';

import { ProfileMessagesPage } from './profile-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMessagesPageRoutingModule
  ],
  declarations: [ProfileMessagesPage]
})
export class ProfileMessagesPageModule {}
