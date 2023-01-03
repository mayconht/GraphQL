/*
  Warnings:

  - You are about to drop the column `animal` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `obs` on the `Animal` table. All the data in the column will be lost.
  - You are about to alter the column `age` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.
  - Added the required column `breed` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Animal" ("age", "createdAt", "id", "name", "updatedAt") SELECT "age", "createdAt", "id", "name", "updatedAt" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
