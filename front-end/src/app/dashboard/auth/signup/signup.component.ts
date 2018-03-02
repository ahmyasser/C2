import { Component, OnInit } from '@angular/core';
import { regService} from '../../../services/reg.services' ;
import {UserOb} from '../../../objects/UserObject';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    username : string ;
    password : string ;
    email : string ;
    users: LocalDataSource=new LocalDataSource();

    constructor(
        private regService:regService
    ) {

    }
    add(){
        var userob =  {
            fullname:this.username,
            email:this.email,
            password:this.password
        }
        this.regService.addReg(userob).subscribe(Response=>{
            this.users.add(userob);
            setTimeout(function() { alert("User Saved"); }, 5);
            window.location.href="#/dashboard/authe/login";

        });
        window.location.href="#/dashboard/authe/signup";

        console.log(userob);

    }

    ngOnInit() {
        setTimeout(function() { alert("If you did not redirected to the login page after registeration this mean that registeration failed"); }, 5);
    }



}
