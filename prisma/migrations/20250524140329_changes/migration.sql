/*
  Warnings:

  - You are about to drop the column `notioToken` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_notioToken_key";

-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "notionToken" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "notioToken";
