import { AppUser } from '../Model/AppUser';
import { FirebaseObjectObservable } from 'angularfire2/database/firebase_object_observable';
import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class UserService {

  constructor(private afdb: AngularFireDatabase) { }

  save(user : firebase.User){
    
    this.afdb.object('/users/'+user.uid).update({
      Name:user.displayName,
      Email:user.email    

    })
  }

    get(uid: string):FirebaseObjectObservable<AppUser>
    {

     return this.afdb.object('/users/'+uid);

    }


  }


