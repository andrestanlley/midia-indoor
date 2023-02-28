-- CreateTable
CREATE TABLE "WebView" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "WebView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TerminalToWebView" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TerminalToWebView_AB_unique" ON "_TerminalToWebView"("A", "B");

-- CreateIndex
CREATE INDEX "_TerminalToWebView_B_index" ON "_TerminalToWebView"("B");

-- AddForeignKey
ALTER TABLE "_TerminalToWebView" ADD CONSTRAINT "_TerminalToWebView_A_fkey" FOREIGN KEY ("A") REFERENCES "Terminal"("deviceId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TerminalToWebView" ADD CONSTRAINT "_TerminalToWebView_B_fkey" FOREIGN KEY ("B") REFERENCES "WebView"("id") ON DELETE CASCADE ON UPDATE CASCADE;
