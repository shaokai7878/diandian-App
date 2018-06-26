import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WritingPage } from './writing';

@NgModule({
  declarations: [
    WritingPage,
  ],
  imports: [
    IonicPageModule.forChild(WritingPage),
  ],
})
export class WritingPageModule {}
