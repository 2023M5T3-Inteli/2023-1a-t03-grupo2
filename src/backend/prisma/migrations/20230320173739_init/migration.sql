/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `duracao` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailGestor` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Made the column `descricao` on table `projeto` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `areaAtuacao` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `habilidades` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFuncionario` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `projeto` ADD COLUMN `duracao` VARCHAR(191) NOT NULL,
    ADD COLUMN `emailGestor` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL,
    MODIFY `descricao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    ADD COLUMN `areaAtuacao` VARCHAR(191) NOT NULL,
    ADD COLUMN `habilidades` VARCHAR(191) NOT NULL,
    ADD COLUMN `idFuncionario` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nome` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`idFuncionario`);

-- CreateTable
CREATE TABLE `SolicitationState` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emailGestor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SolicitationState_emailGestor_key`(`emailGestor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vagas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoVaga` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
