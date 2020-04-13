import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { User } from './user.model'
import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder, 
              private loginService: LoginService, 
              private notificationService: NotificationService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  login(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
                      .subscribe(user => this.notificationService.notify(`Bem vindo(a), ${user.name}!`),
                                  response => this.notificationService.notify(response.error.message),
                                  () => this.router.navigate([atob(this.navigateTo)]))
  }

}
