import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagelistPage } from './messagelist';

@NgModule({
  declarations: [
    MessagelistPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagelistPage),
  ],
})
export class MessagelistPageModule {}
