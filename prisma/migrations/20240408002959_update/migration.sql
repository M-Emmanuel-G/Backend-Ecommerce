/*
  Warnings:

  - You are about to drop the column `total_value` on the `Products` table. All the data in the column will be lost.
  - You are about to alter the column `qtd_stock` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "total_value",
ALTER COLUMN "qtd_stock" SET DEFAULT 0,
ALTER COLUMN "qtd_stock" SET DATA TYPE INTEGER;
