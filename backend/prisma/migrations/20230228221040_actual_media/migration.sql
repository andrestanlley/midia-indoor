/*
  Warnings:

  - Added the required column `mediaId` to the `Terminal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Terminal" ADD COLUMN     "mediaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
