import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {Router}    from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class Authguard implements CanActivate{

  constructor(private aufth:AuthService,private rtr:Router) { }

  canActivate(route,state :RouterStateSnapshot)
  {

  return this.aufth.user$.map(user=>{

           if (user){
             return true;
           }
           else {
             this.rtr.navigate(['/login'],{queryParams:{returnUrl:state.url}});
             return false;
           }


   })

  }

}
