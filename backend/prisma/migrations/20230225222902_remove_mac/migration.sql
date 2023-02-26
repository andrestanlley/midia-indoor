/*
  Warnings:

  - The primary key for the `Terminal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Terminal` table. All the data in the column will be lost.
  - You are about to drop the column `mac` on the `Terminal` table. All the data in the column will be lost.
  - Added the required column `deviceId` to the `Terminal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Terminal" (
    "deviceId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastSync" DATETIME NOT NULL,
    "midiaListId" TEXT,
    CONSTRAINT "Terminal_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Terminal" ("lastSync", "midiaListId", "name") SELECT "lastSync", "midiaListId", "name" FROM "Terminal";
DROP TABLE "Terminal";
ALTER TABLE "new_Terminal" RENAME TO "Terminal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
