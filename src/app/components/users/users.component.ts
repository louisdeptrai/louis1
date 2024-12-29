import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toast } from '@capacitor/toast';
import { IonicModule, ToastController } from '@ionic/angular';
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
  newEmail = '';
  userList: User[] = [];
  isWeb: any;
  constructor(private storage: StoreService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    console.log("init may lan????");
    
    try {
      this.storage.userState().pipe(
        switchMap(res => {
          if(res) {
            console.log("no fetcheUser o day");
            
            return this.storage.fetchUsers();
          } else {
            console.log("Null co xay ra khong");
            return of([]); // Return an empty array when res is false
          }
        })
      ).subscribe(data => {
        console.log("data o day: ", data);
        this.userList = data; // Update the user list when the data changes
      })
    } catch (error ) {
      throw new Error(`Error: ${error}`);
    }
  }

  async createUser() {
    await this.storage.addUser(this.newUserName, this.newEmail);
    this.showToast("Add user success!");
    this.newUserName = '';
    this.newEmail = '';
    console.log(this.userList, '#users')
  }

  async showToast(message: string) {
    // await Toast.show({
    //   text: message,
    //   position: 'top',
    //   duration: 'long'
    // });
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'top', // Vị trí: 'top', 'middle', 'bottom',
      buttons: ["X"]
    });
    await toast.present();
  };

  updateUser(user: User) {
    const active = user.active === 0 ? 1: 0;
    this.storage.updateUserById(user.id.toString(), active);
  }

  deleteUser(user: User) {
    this.storage.deleteUserById(user.id.toString());
  }

}
