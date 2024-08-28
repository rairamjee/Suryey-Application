import { PrismaClient } from "@prisma/client";
// import { createUsers, User } from "./data/user";
// import { createSurveys, Survey } from "./data/surveys";
import { createQuestions, Question } from "./data/questions";
import { createResponses,Respone } from "./data/response";


const prisma = new PrismaClient();

const main = async () => {
    // const users = await createUsers();
    // const createdUsers = await Promise.all(users.map(async (user:User) => {
    //     return await prisma.user.create({
    //         data: user
    //     })
    // }))
    // console.log("Created Users ", createdUsers.length)


    // const surveys = await createSurveys();
    // const createdSurveys = await Promise.all(surveys.map(async (survey:Survey) => {
    //     return await prisma.survey.create({
    //         data: survey
    //     })
    // }))
    // console.log("Created Users ", createdSurveys.length)

    // const questions = await createQuestions();
    // const createdQuestions = await Promise.all(questions.map(async (question:Question) => {
    //     return await prisma.question.create({
    //         data: question
    //     })
    // }))

    const response = await createResponses();
    const createdResponses = await Promise.all(response.map(async (res:Respone) => {
        return await prisma.respone.create({
            data: res
        })
    }))

}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})