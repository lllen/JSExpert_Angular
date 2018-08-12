import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  links: object[] = [
    // { path: '/main', label: 'Главная', active: 'button-active', icon: 'home' },
    { path: '/films', label: 'Фильмы', active: 'button-active', icon: 'video_library' }, 
    { path: '/actors', label: 'Актеры', active: 'button-active', icon: 'face' }
  ];

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logOut() {
    this.router.navigate(['/login'])
      .then((isNavigate) => {
        if (isNavigate) {
          this.authService.logout();
        }
      })
  }
}
