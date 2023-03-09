/*
  Warnings:

  - You are about to drop the column `type` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the `WebView` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TerminalToWebView` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `Media` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MediaList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[deviceId]` on the table `Terminal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expiresIn` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TerminalToWebView" DROP CONSTRAINT "_TerminalToWebView_A_fkey";

-- DropForeignKey
ALTER TABLE "_TerminalToWebView" DROP CONSTRAINT "_TerminalToWebView_B_fkey";

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "type",
ADD COLUMN     "expiresIn" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Terminal" ADD COLUMN     "actualMedia" TEXT;

-- DropTable
DROP TABLE "WebView";

-- DropTable
DROP TABLE "_TerminalToWebView";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Media_id_key" ON "Media"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MediaList_id_key" ON "MediaList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Terminal_deviceId_key" ON "Terminal"("deviceId");
