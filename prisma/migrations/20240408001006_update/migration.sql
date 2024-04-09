/*
  Warnings:

  - You are about to drop the column `description` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `urlImg` on the `Products` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `entry_time` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_value` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userID_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "description",
DROP COLUMN "urlImg",
ADD COLUMN     "cod_product" SERIAL NOT NULL,
ADD COLUMN     "entry_time" TEXT NOT NULL,
ADD COLUMN     "qtd_stock" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "sales_percentage" DECIMAL(10,2) NOT NULL DEFAULT 1.25,
ADD COLUMN     "total_value" DECIMAL(10,2) NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'normal',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suppliers" (
    "id" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "cod_supplier" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductEntries" (
    "id" TEXT NOT NULL,
    "cod_entries" SERIAL NOT NULL,
    "qtd" DECIMAL(10,2) NOT NULL,
    "note_value" DECIMAL(10,2) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "date" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "supplier_id" TEXT NOT NULL,

    CONSTRAINT "ProductEntries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "supplier_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "release_id" TEXT NOT NULL,
    "clients_id" TEXT NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsRelease" (
    "id" TEXT NOT NULL,
    "cod_release" SERIAL NOT NULL,
    "qtd" DECIMAL(10,2) NOT NULL,
    "note_value" DECIMAL(10,2) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "ProductsRelease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "cod_client" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutputProducts" (
    "id" TEXT NOT NULL,
    "cod_output" SERIAL NOT NULL,
    "date_output" TEXT NOT NULL,
    "qtd_purchase" INTEGER NOT NULL,
    "clientsID" TEXT NOT NULL,
    "productID" TEXT NOT NULL,

    CONSTRAINT "OutputProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_cod_supplier_key" ON "Suppliers"("cod_supplier");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_cnpj_key" ON "Suppliers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_email_key" ON "Suppliers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProductEntries_cod_entries_key" ON "ProductEntries"("cod_entries");

-- CreateIndex
CREATE UNIQUE INDEX "ProductsRelease_cod_release_key" ON "ProductsRelease"("cod_release");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_cod_client_key" ON "Clients"("cod_client");

-- CreateIndex
CREATE UNIQUE INDEX "OutputProducts_clientsID_key" ON "OutputProducts"("clientsID");

-- CreateIndex
CREATE UNIQUE INDEX "OutputProducts_productID_key" ON "OutputProducts"("productID");

-- AddForeignKey
ALTER TABLE "ProductEntries" ADD CONSTRAINT "ProductEntries_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductEntries" ADD CONSTRAINT "ProductEntries_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_release_id_fkey" FOREIGN KEY ("release_id") REFERENCES "ProductsRelease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_clients_id_fkey" FOREIGN KEY ("clients_id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputProducts" ADD CONSTRAINT "OutputProducts_clientsID_fkey" FOREIGN KEY ("clientsID") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputProducts" ADD CONSTRAINT "OutputProducts_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
