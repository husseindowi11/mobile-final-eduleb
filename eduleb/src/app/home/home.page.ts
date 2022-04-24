import { Component } from '@angular/core';
import { CourseService, Course } from '../apis/course.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  categories:any=[];

  constructor(private service: CourseService) {}

  ngOnInit(){
    this.service.getAllCourses().subscribe( response => {
      this.categories = response['data'];
      console.log(this.categories);
    });
  }

}
