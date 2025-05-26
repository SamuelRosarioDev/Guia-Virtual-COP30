BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id_user] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [phone] NVARCHAR(1000) NOT NULL,
    [country] NVARCHAR(1000) NOT NULL,
    [type_user] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [users_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [is_admin] BIT NOT NULL CONSTRAINT [users_is_admin_df] DEFAULT 0,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id_user]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[hoteliers] (
    [id_hotelier] NVARCHAR(1000) NOT NULL,
    [hotel_name] NVARCHAR(1000) NOT NULL,
    [total_quantity] INT NOT NULL,
    [quantity_occupied] INT NOT NULL,
    [cnpj] NVARCHAR(1000) NOT NULL,
    [link] NVARCHAR(1000),
    [address] NVARCHAR(1000) NOT NULL,
    [cep] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [hoteliers_pkey] PRIMARY KEY CLUSTERED ([id_hotelier]),
    CONSTRAINT [hoteliers_cnpj_key] UNIQUE NONCLUSTERED ([cnpj]),
    CONSTRAINT [hoteliers_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- CreateTable
CREATE TABLE [dbo].[traders] (
    [id_trader] NVARCHAR(1000) NOT NULL,
    [store_name] NVARCHAR(1000) NOT NULL,
    [store_type] NVARCHAR(1000) NOT NULL,
    [cpf] NVARCHAR(1000) NOT NULL,
    [cnpj] NVARCHAR(1000),
    [address] NVARCHAR(1000) NOT NULL,
    [cep] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [traders_pkey] PRIMARY KEY CLUSTERED ([id_trader]),
    CONSTRAINT [traders_cpf_key] UNIQUE NONCLUSTERED ([cpf]),
    CONSTRAINT [traders_cnpj_key] UNIQUE NONCLUSTERED ([cnpj]),
    CONSTRAINT [traders_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- CreateTable
CREATE TABLE [dbo].[events] (
    [id_event] NVARCHAR(1000) NOT NULL,
    [name_event] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [type_event] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [start_date] DATETIME2 NOT NULL,
    [end_date] DATETIME2 NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [events_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [events_pkey] PRIMARY KEY CLUSTERED ([id_event])
);

-- CreateTable
CREATE TABLE [dbo].[tourist_attractions] (
    [id_tourist_attraction] NVARCHAR(1000) NOT NULL,
    [name_tourist_attractions] NVARCHAR(1000) NOT NULL,
    [type_tourist_spot] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [tourist_attractions_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [tourist_attractions_pkey] PRIMARY KEY CLUSTERED ([id_tourist_attraction])
);

-- CreateTable
CREATE TABLE [dbo].[banks] (
    [id] NVARCHAR(1000) NOT NULL,
    [name_bank] NVARCHAR(1000) NOT NULL,
    [cnpj] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [cep] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [banks_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [banks_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [banks_cnpj_key] UNIQUE NONCLUSTERED ([cnpj])
);

-- AddForeignKey
ALTER TABLE [dbo].[hoteliers] ADD CONSTRAINT [hoteliers_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id_user]) ON DELETE NO ACTION ON UPDATE CASCADE;

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
