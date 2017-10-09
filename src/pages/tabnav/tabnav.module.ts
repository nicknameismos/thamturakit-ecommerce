import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabnavPage } from './tabnav';

@NgModule({
  declarations: [
    TabnavPage,
  ],
  imports: [
    IonicPageModule.forChild(TabnavPage),
  ]
})
export class TabnavPageModule {}
