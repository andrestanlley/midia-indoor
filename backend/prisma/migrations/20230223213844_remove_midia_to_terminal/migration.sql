-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Midia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "midiaListId" TEXT,
    "terminalId" TEXT,
    CONSTRAINT "Midia_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Midia" ("filename", "id", "midiaListId", "terminalId", "type") SELECT "filename", "id", "midiaListId", "terminalId", "type" FROM "Midia";
DROP TABLE "Midia";
ALTER TABLE "new_Midia" RENAME TO "Midia";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
