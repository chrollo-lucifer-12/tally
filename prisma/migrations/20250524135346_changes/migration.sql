/*
  Warnings:

  - A unique constraint covering the columns `[notioToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "notioToken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_notioToken_key" ON "User"("notioToken");
