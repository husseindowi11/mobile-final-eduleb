import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCoursesPage } from './mycourses.page';

const routes: Routes = [
  {
    path: '',
    component: MyCoursesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCoursesPageRoutingModule {}
