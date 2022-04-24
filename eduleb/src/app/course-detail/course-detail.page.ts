import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseService } from '../apis/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  details=[];

  constructor(private router: Router,private route: ActivatedRoute, private service:CourseService) { }

  ngOnInit() {
    let id = this.route.snapshot.queryParamMap.get('course');
    this.service.getCourse(id).subscribe( response => {
      this.details = response['data'];
      console.log(this.details);
    });
  }

}
