import { UserService } from './shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private aufth:AuthService, private router:Router,private usr:UserService){
    
    aufth.user$.subscribe(user=>{

            if(!user){

        return;
      }
         this.usr.save(user);
       
          let returnUrl=localStorage.getItem('returnurl');
          if(returnUrl)
          {
          router.navigateByUrl(returnUrl);
          localStorage.removeItem('returnurl');
          }
        

    })

  }
}
