import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { of, switchMap } from 'rxjs';
import { User } from 'src/app/_models/user';
import { StoreService } from 'src/app/_service/store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  implements OnInit {
  newUserName = '';
  userList: User[] = [];
  isWeb: any;
  constructor(private storage: StoreService) { }

  ngOnInit() {
    try {
      this.storage.userState().pipe(
        switchMap(res => {
          if(res) {
            return this.storage.fetchUsers();
          } else {
            return of([]); // Return an empty array when res is false
          }
        })
      ).subscribe(data => {
        this.userList = data; // Update the user list when the data changes
      })
    } catch (error ) {
      throw new Error(`Error: ${error}`);
    }
  }

  async createUser() {
    await this.storage.addUser(this.newUserName);
    this.newUserName = '';
    console.log(this.userList, '#users')
  }

  updateUser(user: User) {
    const active = user.active === 0 ? 1: 0;
    this.storage.updateUserById(user.id.toString(), active);
  }

  deleteUser(user: User) {
    this.storage.deleteUserById(user.id.toString());
  }

}
