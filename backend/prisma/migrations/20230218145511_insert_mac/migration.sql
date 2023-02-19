/*
  Warnings:

  - Added the required column `mac` to the `Terminal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Terminal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mac" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastSync" DATETIME NOT NULL,
    "midiaListId" TEXT NOT NULL,
    CONSTRAINT "Terminal_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Terminal" ("id", "lastSync", "midiaListId", "name") SELECT "id", "lastSync", "midiaListId", "name" FROM "Terminal";
DROP TABLE "Terminal";
ALTER TABLE "new_Terminal" RENAME TO "Terminal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
