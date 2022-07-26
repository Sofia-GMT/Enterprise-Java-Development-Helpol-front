import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginUserService } from 'src/app/services/login-user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userList: User[]

  constructor(
    private loginUserService: LoginUserService
  ) { 
    this.userList = []
  }

  ngOnInit(): void {
    this.loginUserService.getAllUser().subscribe(
      dataResult => { 
        this.userList=dataResult
        console.log(this.userList);
      }
    );
  }
  

}
