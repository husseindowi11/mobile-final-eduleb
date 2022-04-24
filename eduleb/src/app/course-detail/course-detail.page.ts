import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseService } from '../apis/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  details=[];
  id:any;

  constructor(private router: Router,private route: ActivatedRoute, private service:CourseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('course');
    this.service.getCourse(this.id).subscribe( response => {
      this.details = response['data'];
      console.log(this.details);
    });
  }

  addForm(){
    this.service.addToMyCourses(this.id).subscribe( response => {
      console.log(response);
    });
    this.service.getCourse(this.id).subscribe( response => {
      this.details = response['data'];
      console.log(this.details);
    });
  }

  removeForm(){
    this.service.removeFromMycourses(this.id).subscribe( response => {
      console.log(response);
    });
    this.service.getCourse(this.id).subscribe( response => {
      this.details = response['data'];
      console.log(this.details);
    });
  }

}
