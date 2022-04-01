/*
  Warnings:

  - You are about to alter the column `name` on the `author` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `title` on the `post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `author` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `title` VARCHAR(50) NOT NULL,
    MODIFY `desc` TINYTEXT NOT NULL;
