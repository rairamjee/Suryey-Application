-- CreateEnum
CREATE TYPE "Designation" AS ENUM ('Software_Engineer', 'Data_Analyst', 'Devops_Engineer');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('User', 'Admin');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('INPUT', 'MCQ', 'TF');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "designation" "Designation" NOT NULL DEFAULT 'Software_Engineer',
    "roles" "Roles" NOT NULL DEFAULT 'User',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Survey" (
    "surveyId" SERIAL NOT NULL,
    "surveyName" TEXT NOT NULL,
    "surveyDescription" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("surveyId")
);

-- CreateTable
CREATE TABLE "Question" (
    "questionId" SERIAL NOT NULL,
    "questionName" TEXT NOT NULL,
    "questionType" "QuestionType" NOT NULL,
    "questionOption" TEXT[],
    "surveyId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("questionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("surveyId") ON DELETE RESTRICT ON UPDATE CASCADE;
