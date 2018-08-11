import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  links: object[] = [
    { path: '/main', label: 'Главная', active: 'button-active', icon: 'home' },
    { path: '/films', label: 'Фильмы', active: 'button-active', icon: 'video_library' }, 
    { path: '/actors', label: 'Актеры', active: 'button-active', icon: 'face' }
  ];

  login = { path: '/login', label: 'Вход', active: 'button-active', icon: 'perm_identity' };
  logout = { path: '/logout', label: 'Выход', active: 'button-active', icon: 'perm_identity' };

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  
}
