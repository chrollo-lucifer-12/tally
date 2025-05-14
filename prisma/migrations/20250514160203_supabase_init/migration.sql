/*
  Warnings:

  - Added the required column `adminId` to the `Workspace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "adminId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Workspace" ADD CONSTRAINT "Workspace_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
