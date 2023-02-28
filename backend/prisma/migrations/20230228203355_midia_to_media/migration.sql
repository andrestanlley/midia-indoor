/*
  Warnings:

  - You are about to drop the column `midiaListId` on the `Terminal` table. All the data in the column will be lost.
  - You are about to drop the `Midia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MidiaList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Midia" DROP CONSTRAINT "Midia_midiaListId_fkey";

-- DropForeignKey
ALTER TABLE "Terminal" DROP CONSTRAINT "Terminal_midiaListId_fkey";

-- AlterTable
ALTER TABLE "Terminal" DROP COLUMN "midiaListId",
ADD COLUMN     "mediaListId" TEXT;

-- DropTable
DROP TABLE "Midia";

-- DropTable
DROP TABLE "MidiaList";

-- CreateTable
CREATE TABLE "MediaList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MediaList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "mediaListId" TEXT,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_mediaListId_fkey" FOREIGN KEY ("mediaListId") REFERENCES "MediaList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_mediaListId_fkey" FOREIGN KEY ("mediaListId") REFERENCES "MediaList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
