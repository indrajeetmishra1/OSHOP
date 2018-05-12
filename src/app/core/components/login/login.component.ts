import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public afauth: AuthService,router:ActivatedRoute) { }

  ngOnInit() {
  }


  login()
  {

    this.afauth.login();
      }

}
