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
import { parse } from 'json2csv';
import fs from 'fs';
const prisma = new PrismaClient();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield prisma.question.findMany();
        const csv = parse(questions);
        const filePath = 'questions.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
    try {
        const surveys = yield prisma.survey.findMany();
        const csv = parse(surveys);
        const filePath = 'surveys.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
    try {
        const responses = yield prisma.respone.findMany();
        const csv = parse(responses);
        const filePath = 'responses.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
    try {
        const users = yield prisma.user.findMany();
        const csv = parse(users);
        const filePath = 'users.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
});
main();
