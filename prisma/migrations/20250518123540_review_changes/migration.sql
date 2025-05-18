/*
  Warnings:

  - You are about to drop the `ReviewSolutions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `questionId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `response` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ReviewSolutions" DROP CONSTRAINT "ReviewSolutions_questionId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewSolutions" DROP CONSTRAINT "ReviewSolutions_reviewId_fkey";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "questionId" TEXT NOT NULL,
ADD COLUMN     "response" JSONB NOT NULL;

-- DropTable
DROP TABLE "ReviewSolutions";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
