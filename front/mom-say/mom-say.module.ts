import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomSayPage } from './mom-say';

@NgModule({
  declarations: [
    MomSayPage,
  ],
  imports: [
    IonicPageModule.forChild(MomSayPage),
  ],
})
export class MomSayPageModule {}
