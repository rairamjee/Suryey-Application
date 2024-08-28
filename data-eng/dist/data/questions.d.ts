import { QuestionType } from '@prisma/client';
export type Question = {
    questionName: string;
    questionType: QuestionType;
    questionOption: string[];
    surveyId: number;
};
export declare function createQuestions(): Promise<Question[]>;
