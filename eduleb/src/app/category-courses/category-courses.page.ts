import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../apis/category.service';

@Component({
  selector: 'app-category-courses',
  templateUrl: './category-courses.page.html',
  styleUrls: ['./category-courses.page.scss'],
})
export class CategoryCoursesPage implements OnInit {

  courses:any=[];

  constructor(private router: Router,private route: ActivatedRoute, private service:CategoryService) { }

  ngOnInit() {
    let id = this.route.snapshot.queryParamMap.get('category');
    this.service.getCategoryCourses(id).subscribe( response => {
      this.courses = response;
      console.log(this.courses);
    });
  }

}
