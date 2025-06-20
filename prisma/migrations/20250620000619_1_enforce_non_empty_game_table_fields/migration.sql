/*
  Warnings:

  - Made the column `title` on table `games` required. This step will fail if there are existing NULL values in that column.
  - Made the column `release_date` on table `games` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publisher` on table `games` required. This step will fail if there are existing NULL values in that column.
  - Made the column `developer` on table `games` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `games` MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `release_date` DATE NOT NULL,
    MODIFY `publisher` VARCHAR(255) NOT NULL,
    MODIFY `developer` VARCHAR(255) NOT NULL;
