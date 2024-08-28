var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
import { createResponses } from "./data/response";
const prisma = new PrismaClient();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
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
    const response = yield createResponses();
    const createdResponses = yield Promise.all(response.map((res) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.respone.create({
            data: res
        });
    })));
});
main().then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
})).catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
