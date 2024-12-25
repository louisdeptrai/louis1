import { Component } from '@angular/core';
import { PhotoService } from '../_service/photo.service';
import { GalleryPhoto } from '@capacitor/camera';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  photos: any[] = [];
  
  constructor(private photoService: PhotoService) {
    this.pickLimitedLibraryPhotos();
  }

  async pickLimitedLibraryPhotos() {
    this.photos = await this.photoService.pickLimitedLibraryPhotos();
  }

}
