import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailSendPage } from './email-send';

@NgModule({
  declarations: [
    EmailSendPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailSendPage),
  ],
})
export class EmailSendPageModule {}
