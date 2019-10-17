import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassRegisterPage } from './class-register';

@NgModule({
  declarations: [
    ClassRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassRegisterPage),
  ],
})
export class ClassRegisterPageModule {}
