export type Survey = {
    surveyName: string;
    surveyDescription: string;
    startDate: Date;
    endDate: Date;
};
export declare function createSurveys(): Promise<Survey[]>;
