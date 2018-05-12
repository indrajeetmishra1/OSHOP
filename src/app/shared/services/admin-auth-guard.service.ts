import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private aufth:AuthService,private usr:UserService) { }

  canActivate():Observable<boolean>{

    return this.aufth.AppUser$.map(user=>user.isAdmin);

  }

}
