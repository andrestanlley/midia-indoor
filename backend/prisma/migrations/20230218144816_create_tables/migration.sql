-- CreateTable
CREATE TABLE "Terminal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastSync" DATETIME NOT NULL,
    "midiaListId" TEXT NOT NULL,
    CONSTRAINT "Terminal_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MidiaList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Midia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL,
    "midiaListId" TEXT,
    CONSTRAINT "Midia_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
