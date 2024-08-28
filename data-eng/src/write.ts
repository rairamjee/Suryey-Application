import { PrismaClient } from "@prisma/client";
import { parse } from 'json2csv';
import fs from 'fs';

const prisma = new PrismaClient();

const main = async () => {
    try {
        const questions = await prisma.question.findMany();
        const csv = parse(questions);
        const filePath = 'questions.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    } catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const surveys = await prisma.survey.findMany();
        const csv = parse(surveys);
        const filePath = 'surveys.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    } catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const responses = await prisma.respone.findMany();
        const csv = parse(responses);
        const filePath = 'responses.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    } catch (error) {
        console.error('Error occurred:', error);
    }

    try {
        const users = await prisma.user.findMany();
        const csv = parse(users);
        const filePath = 'users.csv';
        fs.writeFileSync(filePath, csv);
        console.log(`CSV file has been saved to ${filePath}`);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

main();
