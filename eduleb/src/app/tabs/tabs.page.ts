import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../apis/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private service: AuthenticationService, private router: Router) {}

  logout(){
    this.service.logout().subscribe( response => {
      console.log(response);
      this.router.navigate(['/login']);
    });
  }

}
