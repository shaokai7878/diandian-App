import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JiaoyuDetailPage } from './jiaoyu-detail';

@NgModule({
  declarations: [
    JiaoyuDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(JiaoyuDetailPage),
  ],
})
export class JiaoyuDetailPageModule {}
