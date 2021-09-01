import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users = new Users();
  submitted = false;
  constructor(private userService: UserService) { }
  ngOnInit() {
  }
  newEmployee(): void {
    this.submitted = false;
    this.users = new Users();
  }
 save() {
   
   this.userService.createUser(this.users)
     .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
     this.users = new Users();
    
  }
  onSubmit() {
   this.submitted = true;
     this.save();
 }


}
