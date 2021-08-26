import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({

})

export class UserListComponent implements OnInit {
   

    constructor(private userService: UserService){ }

    ngOnInit() {
        this.userService.getUsers()
        .subscribe(users => {
            console.log(users);
        });
    }
}