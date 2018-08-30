import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  private authUrl = 'https://reqres.in/api';
  private loggedIn = false;

  api_key = '7af8eaf6a186a3293b5e1c8f1abf22ab';
  request_token;


  constructor(private http: HttpClient) {
    // при обновлении страницы смотрим в localStorage чтоб проверить есть ли токен
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.login_test();
    this.getSessionID();
  }

  ngOnInit() {
   
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, {username, password})
      .pipe(  /// ?
        retry(2), /// ?
        tap(res => { /// ?
          if (res.token) {
            localStorage.setItem('auth_token', res.token);
            this.loggedIn = true;
          }
        }),
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  getRequestToken() {
     return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.api_key}`);
  }

  login_test() {
     this.getRequestToken().subscribe(
       (data) => {
         this.request_token = data['request_token'];
    });

    return this.http.get(`https://api.themoviedb.org/3/authentication/token/validate_with_login?username=lllen&password=newmileyc21&request_token=${this.request_token}&api_key=${this.api_key}`);
  }

  getSessionID() {
    this.login_test().subscribe(
      (data) => {
        this.request_token = data['request_token'];
    });

    return this.http.get(` https://api.themoviedb.org/3/authentication/session/new?api_key=${this.api_key}&request_token=${this.request_token}`)
    .pipe(
      tap(data => {
        localStorage.setItem('sessionID', data['session_id']);
        this.loggedIn = true;
      })
    );
  }
}
