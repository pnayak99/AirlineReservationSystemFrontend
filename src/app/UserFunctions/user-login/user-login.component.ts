import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Users } from 'src/app/users/users';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user=new Users();
  msg:string="";

  userId:any
 
  constructor(private userService: UserService, private router: Router) { 

    
  }

  onSubmit() {
    	

    this.userService.loginUser(this.user).subscribe(
      data => {
        // this.admin=data;
        // if(this.admin){
          console.log("Credentials received");


          localStorage.setItem("userName", this.user.userId)
          this.userId=localStorage.getItem("userName");
          console.log(this.userId)
        

        
        
         console.log(this.user);
        
           this.router.navigate(['loginLanding'])
          
        
        
    },
      error => {console.log("Exception");
      this.msg="Invalid Credentials!!! Please enter valid Username and Password";
  }
    )

  }
  ngOnInit(): void {

   
     				
                        
  }
  
  }