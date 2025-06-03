-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "type_user" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "hoteliers" (
    "id_hotelier" TEXT NOT NULL,
    "hotel_name" TEXT NOT NULL,
    "total_quantity" INTEGER NOT NULL,
    "quantity_occupied" INTEGER NOT NULL,
    "cnpj" TEXT NOT NULL,
    "link_map" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "hoteliers_pkey" PRIMARY KEY ("id_hotelier")
);

-- CreateTable
CREATE TABLE "traders" (
    "id_trader" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,
    "store_type" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cnpj" TEXT,
    "link_map" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "traders_pkey" PRIMARY KEY ("id_trader")
);

-- CreateTable
CREATE TABLE "events" (
    "id_event" TEXT NOT NULL,
    "name_event" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type_event" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id_event")
);

-- CreateTable
CREATE TABLE "tourist_attractions" (
    "id_tourist_attraction" TEXT NOT NULL,
    "name_tourist_attractions" TEXT NOT NULL,
    "type_tourist_spot" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tourist_attractions_pkey" PRIMARY KEY ("id_tourist_attraction")
);

-- CreateTable
CREATE TABLE "banks" (
    "id" TEXT NOT NULL,
    "name_bank" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "banks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "hoteliers_cnpj_key" ON "hoteliers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "hoteliers_userId_key" ON "hoteliers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "traders_cpf_key" ON "traders"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "traders_cnpj_key" ON "traders"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "traders_userId_key" ON "traders"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "banks_cnpj_key" ON "banks"("cnpj");

-- AddForeignKey
ALTER TABLE "hoteliers" ADD CONSTRAINT "hoteliers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "traders" ADD CONSTRAINT "traders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
