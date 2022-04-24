import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

export interface Course{
  id: string,
  category_id: string,
  name: string,
  slug: string,
  description: string,
  image: string,
  is_featured: string,
  created_by: string,
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  getAllCourses(){
    let response = this.http.get(this.url + 'api/courses')

    return response;
  }

  getCourse(id){
    let response = this.http.get(this.url + 'api/courses/' + id)
    return response;
  }
}
