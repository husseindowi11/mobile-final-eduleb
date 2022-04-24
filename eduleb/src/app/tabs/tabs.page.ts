import { Component } from '@angular/core';
import { AuthenticationService } from '../apis/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private service: AuthenticationService) {}

  logout(){
    this.service.logout().subscribe( response => {
      console.log(response);
    });
  }

}
