import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCoursesPageRoutingModule } from './category-courses-routing.module';

import { CategoryCoursesPage } from './category-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryCoursesPageRoutingModule
  ],
  declarations: [CategoryCoursesPage]
})
export class CategoryCoursesPageModule {}
