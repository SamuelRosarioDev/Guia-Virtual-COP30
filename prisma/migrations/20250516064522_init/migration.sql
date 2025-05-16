/*
  Warnings:

  - You are about to drop the `Traders` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Traders] DROP CONSTRAINT [Traders_userId_fkey];

-- DropTable
DROP TABLE [dbo].[Traders];

-- CreateTable
CREATE TABLE [dbo].[traders] (
    [id_trader] NVARCHAR(1000) NOT NULL,
    [storeName] NVARCHAR(1000) NOT NULL,
    [storeType] NVARCHAR(1000) NOT NULL,
    [cpf] NVARCHAR(1000) NOT NULL,
    [cnpj] NVARCHAR(1000),
    [address] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [traders_pkey] PRIMARY KEY CLUSTERED ([id_trader]),
    CONSTRAINT [traders_cpf_key] UNIQUE NONCLUSTERED ([cpf]),
    CONSTRAINT [traders_cnpj_key] UNIQUE NONCLUSTERED ([cnpj]),
    CONSTRAINT [traders_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- AddForeignKey
ALTER TABLE [dbo].[traders] ADD CONSTRAINT [traders_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id_user]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
