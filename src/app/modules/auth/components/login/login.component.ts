import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { SessionService} from '../../../../shared/services/session.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginObj = {
    email:'',
    password:''
  }
  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private session: SessionService){}

  login(): void {
    this.http.post('http://localhost:3000/api/auth/login', this.loginObj).subscribe((res: any)=>{
      console.log("val",res);
      this.session.setSession('token', res.token)
      this.session.setCookies();
      this.authService.login();
      this.router.navigate(['/home']);
    },
    (err)=>{
      console.log("error", err);
      this.router.navigate(['/login']);
    })
    
  }
}
