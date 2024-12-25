import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, GalleryPhoto } from '@capacitor/camera';
import { Platform } from '@ionic/angular';
import { AndroidSettings, IOSSettings, NativeSettings } from 'capacitor-native-settings';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  constructor(private platform:  Platform) {
    // this.init();
  }

  async init() {
    const permissions = await this.checkPermissions();
    if (this.platform.is('ios') && permissions['photos'] == 'limited') {
      this.getLimitedLibraryPhotos();
    }
  }

  async pickPhotos(): Promise<GalleryPhoto[]> {
    try {
      const result = await Camera.pickImages({
        quality: 90,
        limit: 5, // Số lượng ảnh tối đa có thể chọn
      });

      // Trả về danh sách URL của các ảnh đã chọn
      // return result.photos.map((photo: GalleryPhoto) => photo.webPath || '');
      return result.photos;
    } catch (error) {
      console.error('Error pickPhotos:', error);
      return [];
    }
  }

  async pickLimitedLibraryPhotos(): Promise<GalleryPhoto[]> {
    try {
      const result = await Camera.pickLimitedLibraryPhotos();
      return result.photos;
      // return result.photos.map((photo: GalleryPhoto) => photo.webPath || '');
    }  catch (error) {
      console.error('Error pickLimitedLibraryPhotos: ', error);
      return [];
    }
  }

  async getLimitedLibraryPhotos(): Promise<GalleryPhoto[]> {
    try {
      const result = await Camera.getLimitedLibraryPhotos();
      return result.photos;
    } catch (error) {
      console.error('Error getLimitedLibraryPhotos: ', error);
      return [];
    }
  }

  async checkPermissions(): Promise<any> {
    try {
      const result = await Camera.checkPermissions();
      return result;
    } catch (error) {
      console.error('Error checkPermissions:', error);
      return null;
    }
  }

  async requestPermissions(): Promise<any> {
    try {
      const result = await Camera.requestPermissions({
        permissions : ['photos']
      });
      return result;
    } catch (error) {
      console.error('Error requestPermissions: ', error);
      return null;
    }
  } 


  async openPhotoSettings() {
    try {
      await NativeSettings.open({
        optionAndroid: AndroidSettings.Bluetooth, // Điều hướng đến cài đặt ứng dụng (Android)
        optionIOS: IOSSettings.App,                    // Điều hướng đến cài đặt ứng dụng (iOS)
      });
    } catch (error) {
      console.error('Lỗi khi mở cài đặt:', error);
    }
  }
}
