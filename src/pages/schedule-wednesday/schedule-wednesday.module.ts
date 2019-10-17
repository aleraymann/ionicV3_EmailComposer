import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleWednesdayPage } from './schedule-wednesday';

@NgModule({
  declarations: [
    ScheduleWednesdayPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleWednesdayPage),
  ],
})
export class ScheduleWednesdayPageModule {}
