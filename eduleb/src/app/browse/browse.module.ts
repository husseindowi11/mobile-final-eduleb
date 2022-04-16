import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowsePage } from './browse.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BrowseRoutingModule } from './browse-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BrowseRoutingModule
  ],
  declarations: [BrowsePage]
})
export class BrowsePageModule {}
