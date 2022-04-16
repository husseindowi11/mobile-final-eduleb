import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryCoursesPage } from './category-courses.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryCoursesPageRoutingModule {}
