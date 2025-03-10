-- CreateTable
CREATE TABLE "qwer_videos" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "url" VARCHAR(300) NOT NULL,
    "source" VARCHAR(100) NOT NULL,
    "tag" VARCHAR(50) NOT NULL,
    "iconimg" VARCHAR(300) NOT NULL,
    "uploaddate" TIMESTAMP(6) NOT NULL,
    "churl" VARCHAR(100) NOT NULL,

    CONSTRAINT "qwer_videos_pkey" PRIMARY KEY ("id")
);
