import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Admins } from 'src/app/admins/admins';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin=new Admins();
  msg:string=""

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
     				
                        
  }

  onSubmit() {
    	

    this.adminService.loginAdmin(this.admin).subscribe(
      data => {
        this.admin=data;
        // if(this.admin){
          console.log("Credentials received");

        
        
         console.log(this.admin);
        
          this.router.navigate(['adminDashboard'])
          
        
        
    },
      error => {console.log("Exception");
      this.msg="Invalid Credentials!!! Please enter valid Username and Password";
  }
    )
}}