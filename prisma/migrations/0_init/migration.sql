-- CreateTable
CREATE TABLE `games` (
    `game_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NULL,
    `release_date` DATE NULL,
    `publisher` VARCHAR(255) NULL,
    `developer` VARCHAR(255) NULL,
    `img_path` VARCHAR(255) NULL,
    `rating` BOOLEAN NULL,

    PRIMARY KEY (`game_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

