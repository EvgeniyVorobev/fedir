import { Component, OnInit, NgModule } from '@angular/core';
import { SDKToken,UserprofileApi } from '../../shared/sdk';
import { LoopBackAuth } from  '../../shared/sdk';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  moduleId: module.id
})



export class LoginComponent implements OnInit {
  
  model: any = {};
  loading = false;
  returnUrl: string;
  private state: string = 'login';

  constructor(
    private serviceUserApi: UserprofileApi,
    private authService: LoopBackAuth,
    private router: Router,
    private route: ActivatedRoute
//    private authenticationService: AuthenticationService,
//    private alertService: AlertService

  ) {}

  ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  setState(state: string) {
    this.state = state;
  }

  login() {
    this.loading = true;
    console.log ("trying to login ...");
    this.serviceUserApi.login(this.model.username, this.model.password)
    .subscribe((token: SDKToken) => {
      this.authService.setUser(token);
      this.router.navigate(['/']);
    }, err => {
      alert(err && err.message ? err.message : 'Login failed!');
      //password.value = '';
    });
  }


}
