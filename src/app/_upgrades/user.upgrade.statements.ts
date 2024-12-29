import { capSQLiteVersionUpgrade } from "@capacitor-community/sqlite";

export class UserUpgradeStatements {
    userUpgrades: capSQLiteVersionUpgrade[] = [
        {
            toVersion: 1,
            statements: [
                `CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            active INTEGER DEFAULT 1
            );`
            ]
        },
        {
            toVersion: 2,
            statements: [
                `ALTER TABLE users ADD COLUMN email TEXT;`,
            ]
        },
        {
            toVersion: 3,
            statements: [
                `ALTER TABLE users ADD COLUMN age INTEGER;`,
            ]
        }
    ]
}