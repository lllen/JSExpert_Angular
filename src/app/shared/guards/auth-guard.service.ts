import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  canActivate() {
    const isLogin = this.authService.isLoggedIn();
    if (isLogin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
