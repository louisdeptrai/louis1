import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { UserUpgradeStatements } from '../_upgrades/user.upgrade.statements';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { SQLiteService } from './sqlite.service';
import { DbnameVersionService } from './dbname-version.service';
import { CategoryUpgradeStatements } from '../_upgrades/category.upgrade.statements';
import { Upgrade } from '../_models/upgrade';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public userList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private databaseName: string = "";
  private uUpdStmts: UserUpgradeStatements = new UserUpgradeStatements();
  private categoryUpdateStmts: CategoryUpgradeStatements = new CategoryUpgradeStatements();
  // private versionUpgrades: any;
  private loadToVersion: any;
  private allUpdate: any;
  private db!: SQLiteDBConnection;
  private isUserReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqliteService: SQLiteService,
    private dbVerService: DbnameVersionService
  ) {
    // this.versionUpgrades = this.uUpdStmts.userUpgrades;
    // this.loadToVersion = this.versionUpgrades[this.versionUpgrades.length - 1].toVersion;

  }
  async initializeDatabase(dbName: string) {
    this.databaseName = dbName;
    const userUpgrades = this.uUpdStmts.userUpgrades;
    const categoryUpgrades = this.categoryUpdateStmts.categoryUpgrades;
    this.allUpdate = [
      ...new UserUpgradeStatements().userUpgrades,
      ...new CategoryUpgradeStatements().categoryUpgrades
    ];

    console.log("all update: ", this.allUpdate);
    this.loadToVersion = Math.max(...this.allUpdate.map((u: Upgrade) => u.toVersion));
    console.log("version: ", this.loadToVersion);

    // create upgrade stament
    await this.sqliteService
      .addUpgradeStatement({
        database: this.databaseName,
        upgrade: userUpgrades
      });

    await this.sqliteService
      .addUpgradeStatement({
        database: this.databaseName,
        upgrade: categoryUpgrades
      });

    // create and / or open the database;
    this.db = await this.sqliteService.openDatabase(this.databaseName,
      false,
      'no-encryption',
      this.loadToVersion,
      false
    );

    this.dbVerService.set(this.databaseName, this.loadToVersion);
    await this.getUsers();
    
  }




  // Current database state
  userState() {
    return this.isUserReady.asObservable();
  }

  fetchUsers(): Observable<User[]> {
    return this.userList.asObservable();
  }

  async loadUsers() {
    const users: User[] = (await this.db.query('SELECT * FROM users;')).values as User[];
    this.userList.next(users);
  }


  // CRUD Operations
  async getUsers() {
    await this.loadUsers();
    this.isUserReady.next(true);
  }

  async addUser(name: string, email: string) {
    const sql = `INSERT INTO users (name, email) VALUES (?,?);`;
    await this.db.run(sql, [name, email]);
    await this.getUsers();
  }

  async updateUserById(id: string, active: number) {
    const sql = `UPDATE users SET active=${active} WHERE id=${id}`;
    await this.db.run(sql);
    await this.getUsers();
  }

  async deleteUserById(id: string) {
    const sql = `DELETE FROM users WHERE id=${id}`;
    await this.db.run(sql);
    await this.getUsers();
  }
}
