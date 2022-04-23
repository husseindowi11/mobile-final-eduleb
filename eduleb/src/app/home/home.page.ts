import { Component } from '@angular/core';
import { CourseService, Course } from '../apis/course.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  courses: Course[];

  constructor(private service: CourseService) {}

  ngOnInit(){
    this.service.getAllCourses().subscribe( response => {
      this.courses = response;
      console.log(this.courses);
    });
  }

}
