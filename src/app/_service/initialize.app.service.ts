import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { StoreService } from './store.service';
import { Toast } from '@capacitor/toast';

@Injectable({
  providedIn: 'root'
})
export class InitializeAppService {
  isAppInit: boolean = false;
  platform!: string;
  constructor(
    private sqliteService: SQLiteService,
    private storeService: StoreService
  ) { }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (rest) => {
      this.platform = this.sqliteService.platform;
      try {
        if (this.platform === 'web') {
          await this.sqliteService.initWebStore();
        }

        // initialize the myuserdb database
        const DB_USERS = 'myuserdb';
        await this.storeService.initializeDatabase(DB_USERS);
         // Here Initialize MOCK_DATA if required

         // Initialize whatever database and/or MOCK_DATA you like
        if (this.platform === 'web') {
          await this.sqliteService.saveToStore(DB_USERS);
        }

        this.isAppInit = true;
      } catch (error) {
        console.log(`initalizerAppError: ${error}`);
        await Toast.show({
          text: `initalizerAppError: ${error}`,
          duration: 'long'
        });
      }
    })
  }
}
