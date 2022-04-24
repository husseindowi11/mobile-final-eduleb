import { Component } from '@angular/core';
import { MycoursesService } from '../apis/mycourses.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: 'mycourses.page.html',
  styleUrls: ['mycourses.page.scss']
})
export class MyCoursesPage {

  courses:any=[];

  constructor(private service: MycoursesService) {}

  ngOnInit(){
    this.service.getUserCourses().subscribe( response => {
      this.courses = response['data'];
      console.log(this.courses['data']);
    });
  }
  

}
