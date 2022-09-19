-- CreateTable
CREATE TABLE "item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "memo" TEXT,
    "isDone" BOOLEAN NOT NULL DEFAULT false
);
