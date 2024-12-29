import { Component } from '@angular/core';
import { InitializeAppService } from './_service/initialize.app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private initializeAppService: InitializeAppService) {
    this.initializeAppService.initializeApp();
  }
}
