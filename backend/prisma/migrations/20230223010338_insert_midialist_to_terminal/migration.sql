-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Terminal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mac" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastSync" DATETIME NOT NULL,
    "midiaListId" TEXT,
    CONSTRAINT "Terminal_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Terminal" ("id", "lastSync", "mac", "midiaListId", "name") SELECT "id", "lastSync", "mac", "midiaListId", "name" FROM "Terminal";
DROP TABLE "Terminal";
ALTER TABLE "new_Terminal" RENAME TO "Terminal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
