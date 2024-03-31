import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor( private router: Router, private authService: AuthService, private homeService: HomeService, private session: SessionService){
  }
  userDetail = {
    name: '',
    email: '',
    role: '',
    profilePhoto: ''
  }

  ngOnInit(){
    this.getUserDetails();
  }

  getUserDetails(){
    this.homeService.getDetails().subscribe({
      next: (res: any)=>{
        console.log(res)
        this.userDetail.name = res.user.name;
        this.userDetail.email = res.user.email;
        this.userDetail.profilePhoto = res.user?.profilePhoto;
        this.userDetail.role = res.user?.isAdmin ? "Admin" : "User";
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

  logoutUser(){
    this.session.clearSession();
    this.session.clearLocalStorage();
    this.session.clearCookies();
    alert('logout')
    this.homeService.logout().subscribe((res)=>{
      console.log(res);
    });
    this.router.navigate(['/login']);
  }
  
}
