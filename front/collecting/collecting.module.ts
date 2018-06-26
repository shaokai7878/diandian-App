import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectingPage } from './collecting';

@NgModule({
  declarations: [
    CollectingPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectingPage),
  ],
})
export class CollectingPageModule {}
