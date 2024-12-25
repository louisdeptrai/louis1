import { Component } from '@angular/core';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Camera, GalleryPhoto } from '@capacitor/camera';
import { PhotoService } from '../_service/photo.service';
import { ModalController, Platform } from '@ionic/angular';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  photos: any[] = [];
  constructor(
    private photoService: PhotoService,
    private modalCtrl : ModalController,
    private platform: Platform
  ) {
    // this.checkPermissions();
  }

  async checkPermissions() {
    const permissions = await this.photoService.checkPermissions();
    if (permissions['photos'] == 'denied') {
      this.openModal();
    } else if (permissions['photos'] == 'granted' || permissions['photos'] == 'prompt') {
      this.selectPhoto();
    } else if (permissions['photos'] == 'limited') {
      this.openModal();
    }
  }




  async requestPermissions() {
    let permissions = await this.photoService.requestPermissions();
    console.log("Reuqest permissions: " , permissions);
  }

  async getLimitedLibraryPhotos() {
    this.photos = await this.photoService.getLimitedLibraryPhotos();
  }

  async pickLimitedLibraryPhotos() {
    this.photos = await this.photoService.pickLimitedLibraryPhotos();
  }

  async selectImage() {
    if (this.platform.is("android")) {
      this.selectPhoto();
    } else if (this.platform.is("ios")) {
      this.checkPermissions();
    }
  }

  // for android
  async selectPhoto() {
    this.photos = await this.photoService.pickPhotos();
  }

  // for ios
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PhotoComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if( role == 'add') {
      this.photos = data;
    }
  }
}
