-- CreateTable
CREATE TABLE "Terminal" (
    "deviceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastSync" TIMESTAMP(3) NOT NULL,
    "midiaListId" TEXT,

    CONSTRAINT "Terminal_pkey" PRIMARY KEY ("deviceId")
);

-- CreateTable
CREATE TABLE "MidiaList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MidiaList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Midia" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "midiaListId" TEXT,

    CONSTRAINT "Midia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Midia" ADD CONSTRAINT "Midia_midiaListId_fkey" FOREIGN KEY ("midiaListId") REFERENCES "MidiaList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
