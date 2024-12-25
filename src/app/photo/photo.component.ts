import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../_service/photo.service';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent  implements OnInit {
  photos: any[] = [];
  isDenied = false;
  isLimited = false;
  constructor(private photoService: PhotoService,
    private modalCtrl: ModalController,
    private platform: Platform) {
      if (this.platform.is("ios")) {
        this.checkPermissions();
      }
  }

  ngOnInit() {}

  async getLimitedLibraryPhotos() {
    this.photos = await this.photoService.getLimitedLibraryPhotos();
  }


  async pickLimitedLibraryPhotos() {
    this.photos = await this.photoService.pickLimitedLibraryPhotos();
  }


  async checkPermissions() {
    const permissions = await this.photoService.checkPermissions();
    console.log("List permissions: ", permissions);
    if (permissions['photos'] == 'denied') {
      this.isDenied = true;
    } else if (permissions['photos'] == 'limited') {
      console.log("Gioi han truy cap");
      this.isLimited = true;
      this.getLimitedLibraryPhotos();
      
    }
    console.log("List permissions: ", permissions);
  }

  async selectPhoto() {
    this.photos = await this.photoService.pickPhotos();
  }



  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  add() {
    this.modalCtrl.dismiss(this.photos, 'add');
  }

  setting() {
    this.photoService.openPhotoSettings();
  }

  

}
