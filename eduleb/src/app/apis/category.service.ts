import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  public getCategories(){
    return this.http.get(this.url + 'api/categories');
  }

  public getCategoryCourses(id){
    return this.http.get(this.url + 'api/categories/' + id);
  }
}
