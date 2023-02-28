-- DropForeignKey
ALTER TABLE "Terminal" DROP CONSTRAINT "Terminal_mediaId_fkey";

-- AlterTable
ALTER TABLE "Terminal" ALTER COLUMN "mediaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
