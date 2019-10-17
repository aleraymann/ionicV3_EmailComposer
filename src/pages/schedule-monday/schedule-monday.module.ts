import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleMondayPage } from './schedule-monday';

@NgModule({
  declarations: [
    ScheduleMondayPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleMondayPage),
  ],
})
export class ScheduleMondayPageModule {}
