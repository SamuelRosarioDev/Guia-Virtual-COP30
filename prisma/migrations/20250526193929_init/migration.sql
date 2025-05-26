/*
  Warnings:

  - Added the required column `updatedAt` to the `hoteliers` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `tourist_attractions` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `traders` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[hoteliers] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [hoteliers_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[updatedAt] DATETIME2 NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[tourist_attractions] ALTER COLUMN [description] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[traders] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [traders_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[updatedAt] DATETIME2 NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
