-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "urlImg" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
