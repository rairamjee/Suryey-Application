export type Respone = {
    id: number;
    userId: number;
    surveyId: number;
};
export declare function createResponses(): Promise<Respone[]>;
