var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Create dummy data for the Respone model
export function createResponses() {
    return __awaiter(this, void 0, void 0, function* () {
        const responses = [
            { "id": 1, "userId": 1, "surveyId": 1 },
            { "id": 2, "userId": 1, "surveyId": 2 },
            { "id": 3, "userId": 2, "surveyId": 3 },
            { "id": 4, "userId": 2, "surveyId": 4 },
            { "id": 5, "userId": 4, "surveyId": 5 },
            { "id": 6, "userId": 4, "surveyId": 6 },
            { "id": 7, "userId": 5, "surveyId": 7 },
            { "id": 8, "userId": 6, "surveyId": 8 },
            { "id": 9, "userId": 6, "surveyId": 9 },
            { "id": 10, "userId": 7, "surveyId": 10 },
            { "id": 11, "userId": 8, "surveyId": 11 },
            { "id": 12, "userId": 8, "surveyId": 12 },
            { "id": 13, "userId": 10, "surveyId": 13 },
            { "id": 14, "userId": 10, "surveyId": 14 },
            { "id": 15, "userId": 11, "surveyId": 15 },
            { "id": 16, "userId": 11, "surveyId": 16 },
            { "id": 17, "userId": 12, "surveyId": 17 },
            { "id": 18, "userId": 12, "surveyId": 18 },
            { "id": 19, "userId": 14, "surveyId": 19 },
            { "id": 20, "userId": 14, "surveyId": 20 },
            { "id": 21, "userId": 16, "surveyId": 21 },
            { "id": 22, "userId": 16, "surveyId": 22 },
            { "id": 23, "userId": 19, "surveyId": 23 },
            { "id": 24, "userId": 19, "surveyId": 24 },
            { "id": 25, "userId": 19, "surveyId": 25 },
            { "id": 26, "userId": 1, "surveyId": 26 },
            { "id": 27, "userId": 2, "surveyId": 27 },
            { "id": 28, "userId": 3, "surveyId": 28 },
            { "id": 29, "userId": 4, "surveyId": 29 },
            { "id": 30, "userId": 5, "surveyId": 30 },
            { "id": 31, "userId": 6, "surveyId": 31 }
        ];
        return responses;
        ;
    });
}
// Usage example
createResponses().then(responses => {
    console.log(responses);
});
