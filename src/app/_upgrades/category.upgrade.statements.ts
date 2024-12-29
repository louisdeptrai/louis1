export class CategoryUpgradeStatements {
    categoryUpgrades = [
        {
            toVersion: 1,
            statements: [
                `CREATE TABLE IF NOT EXISTS categories(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
            );`
            ]
        },
        {
            toVersion: 2,
            statements: [
                `ALTER TABLE categories ADD COLUMN description TEXT;`,
            ]
        }
    ]
}