import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHeaderComponent implements OnInit {
  imageBaseUrl = environment.baseImageUrl;
  profilePic = environment.profilePic;

  show:boolean = false;
  toggleShow = () => this.show = !this.show;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.profilePic = this.auth.getLoggedUser().profilePic ?
                        this.imageBaseUrl +'/'+ this.auth.getLoggedUser().profilePic
                      : this.profilePic;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
