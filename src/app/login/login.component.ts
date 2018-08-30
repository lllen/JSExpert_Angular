import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  errorMessage = '';
  userForm: FormGroup;

  formErrors = {
    "userName": "",
    "password": ""
  }

  validationMessages = {
    "userName": {
      "required": "Обязательное поле.",
      "minlength": "Значение должно быть не менее 4х символов.",
      "maxlength": "Значение не должно быть больше 15 символов."
    },
    "password": {
      "required": "Обязательное поле.",
      "minlength": "Значение должно быть не менее 4х символов.",
      "maxlength": "Значение не должно быть больше 15 символов.",
      "pattern": "Не правильный формат пароля."
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const isLogin = this.authService.isLoggedIn();
    if (isLogin) {
      this.router.navigate(['/films']);
    }
    this.initFormValidators();
  }

  login() {
    this.errorMessage = '';
    if(this.userForm.status==='VALID') {
      this.authService.login(this.userForm.value['userName'], this.userForm.value['password'])
      .subscribe(
        () => {
          this.router.navigate(['/films']);
        }
      );
    }
  }

  initFormValidators() {
    this.userForm = this.formBuilder.group({
      userName: ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]],
      password: ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern("[a-zA-Z]+") ///? 
      ]]
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChange());
  }

  onValueChange() {
    //if (!this.userForm) return;  /// ?

    for (let item in this.formErrors) {
        this.formErrors[item] = "";
        let control = this.userForm.get(item);

        if (control && control.dirty && !control.valid) {
            let message = this.validationMessages[item];
            for (let key in control.errors) {
                this.formErrors[item] += message[key] + " ";
            }
        }
      }
  }

}
