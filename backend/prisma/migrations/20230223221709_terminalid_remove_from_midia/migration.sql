/*
  Warnings:

  - You are about to drop the column `terminalId` on the `Midia` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Midia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "midiaListId" TEXT,
    CONSTRAINT "Midia_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Midia" ("filename", "id", "midiaListId", "type") SELECT "filename", "id", "midiaListId", "type" FROM "Midia";
DROP TABLE "Midia";
ALTER TABLE "new_Midia" RENAME TO "Midia";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
