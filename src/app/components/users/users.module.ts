import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UsersComponent],
  imports: [ CommonModule, FormsModule, IonicModule],
  exports: [UsersComponent]
})
export class UsersModule { }
