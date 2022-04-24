import { Component } from '@angular/core';
import { CategoryService } from '../apis/category.service';

@Component({
  selector: 'app-browse',
  templateUrl: 'browse.page.html',
  styleUrls: ['browse.page.scss']
})
export class BrowsePage {
  categories:any=[];

  constructor(private service: CategoryService) {}

  ngOnInit(){
    this.service.getCategories().subscribe( response => {
      this.categories = response;
      console.log(this.categories);
    });
  }

}
