import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService } from '../services/index';

import {} from ''

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    
   // myUser:any = firebase.auth().currentUser;
    currentUser: User;
    users: User[] = [];

    

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        console.log(this);
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}