-- CreateTable
CREATE TABLE "Respone" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "surveyId" INTEGER NOT NULL,

    CONSTRAINT "Respone_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Respone" ADD CONSTRAINT "Respone_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("surveyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respone" ADD CONSTRAINT "Respone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
