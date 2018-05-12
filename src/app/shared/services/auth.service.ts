import { UserService } from './user.service';
import { AppUser } from '../Model/AppUser';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  user$ :Observable<firebase.User>

  constructor(private afth:AngularFireAuth,
              private router:ActivatedRoute,
              private route:Router,
              private usr :UserService) { 

    this.user$=afth.authState

  }

  login()
  {
    let returnurl=this.router.snapshot.queryParamMap.get('returnUrl')||'/';

    localStorage.setItem('returnurl',returnurl);
    //this.afth.auth.signInWithEmailAndPassword("indra@gmail.com","centrino");

    this.afth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout(){
      
      console.log("SignOut");
      this.afth.auth.signOut();
      this.route.navigate(['/']);
  }

  get AppUser$():Observable<AppUser>
  {



    return this.user$.switchMap(user=>{

    if(user){
            return this.usr.get(user.uid);
            }

            else {
                 return Observable.of (null);
                }
    });

    
  }

}
