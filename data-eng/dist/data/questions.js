var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { QuestionType } from '@prisma/client'; // Adjust the import based on your setup
// Create dummy question data with 20 questions
export function createQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            { questionName: "What is your level of satisfaction with your job?", questionType: QuestionType.Input, questionOption: [], surveyId: 1 },
            { questionName: "How would you rate our customer service?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 2 },
            { questionName: "Do you think the training was helpful?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 3 },
            { questionName: "Which features do you like the most?", questionType: QuestionType.MCQ, questionOption: ["Feature A", "Feature B", "Feature C"], surveyId: 4 },
            { questionName: "Please provide your feedback on our new product.", questionType: QuestionType.Input, questionOption: [], surveyId: 5 },
            { questionName: "How often do you use our product?", questionType: QuestionType.MCQ, questionOption: ["Daily", "Weekly", "Monthly", "Rarely"], surveyId: 1 },
            { questionName: "Would you recommend our service to others?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 2 },
            { questionName: "Rate the following aspects of our service.", questionType: QuestionType.MCQ, questionOption: ["Speed", "Quality", "Customer Support"], surveyId: 3 },
            { questionName: "What improvements would you like to see?", questionType: QuestionType.Input, questionOption: [], surveyId: 4 },
            { questionName: "Do you feel valued as an employee?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 5 },
            { questionName: "Which of the following training topics are you interested in?", questionType: QuestionType.MCQ, questionOption: ["Leadership", "Technical Skills", "Soft Skills"], surveyId: 1 },
            { questionName: "How would you rate your onboarding experience?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 2 },
            { questionName: "Please describe any challenges you faced during the training.", questionType: QuestionType.Input, questionOption: [], surveyId: 3 },
            { questionName: "Do you agree with the new policy changes?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 4 },
            { questionName: "What additional support would you find useful?", questionType: QuestionType.Input, questionOption: [], surveyId: 5 },
            { questionName: "How would you rate the overall quality of our product?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 1 },
            { questionName: "Have you experienced any issues with our product?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 2 },
            { questionName: "What are the top three features you would like to see added?", questionType: QuestionType.Input, questionOption: [], surveyId: 3 },
            { questionName: "How satisfied are you with the speed of our service?", questionType: QuestionType.MCQ, questionOption: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"], surveyId: 4 },
            { questionName: "Would you like to participate in future surveys?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 5 },
            { questionName: "Please provide any additional comments or suggestions.", questionType: QuestionType.Input, questionOption: [], surveyId: 1 },
            { questionName: "How likely are you to use our service again?", questionType: QuestionType.MCQ, questionOption: ["Very Likely", "Likely", "Neutral", "Unlikely"], surveyId: 2 },
            { questionName: "Do you feel the training content was relevant?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 3 },
            { questionName: "What did you think of the new product features?", questionType: QuestionType.Input, questionOption: [], surveyId: 4 },
            { questionName: "How would you rate the overall experience with our service?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 5 },
            // Survey ID 6
            { questionName: "What is your preferred method of communication?", questionType: QuestionType.MCQ, questionOption: ["Email", "Phone", "Chat"], surveyId: 6 },
            { questionName: "How often do you encounter issues with our product?", questionType: QuestionType.MCQ, questionOption: ["Never", "Rarely", "Sometimes", "Often"], surveyId: 6 },
            // Survey ID 7
            { questionName: "What improvements would you suggest for our website?", questionType: QuestionType.Input, questionOption: [], surveyId: 7 },
            { questionName: "Do you find our website user-friendly?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 7 },
            // Survey ID 8
            { questionName: "How satisfied are you with the support team?", questionType: QuestionType.MCQ, questionOption: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"], surveyId: 8 },
            { questionName: "Would you use our service again?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 8 },
            // Survey ID 9
            { questionName: "How clear were the instructions provided during the training?", questionType: QuestionType.MCQ, questionOption: ["Very Clear", "Clear", "Neutral", "Unclear"], surveyId: 9 },
            { questionName: "What topics should be covered in future training sessions?", questionType: QuestionType.Input, questionOption: [], surveyId: 9 },
            // Survey ID 10
            { questionName: "Rate the quality of our customer service.", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 10 },
            { questionName: "Do you have any additional feedback for our service?", questionType: QuestionType.Input, questionOption: [], surveyId: 10 },
            // Survey ID 11
            { questionName: "How would you rate the new feature update?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 11 },
            { questionName: "Have you experienced any bugs with the new update?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 11 },
            // Survey ID 12
            { questionName: "What additional features would you like to see in our product?", questionType: QuestionType.Input, questionOption: [], surveyId: 12 },
            { questionName: "How would you rate your overall experience with our product?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 12 },
            // Survey ID 13
            { questionName: "Do you find the product easy to use?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 13 },
            { questionName: "Rate the effectiveness of our product support.", questionType: QuestionType.MCQ, questionOption: ["Very Effective", "Effective", "Neutral", "Ineffective"], surveyId: 13 },
            // Survey ID 14
            { questionName: "How likely are you to recommend our product to a friend?", questionType: QuestionType.MCQ, questionOption: ["Very Likely", "Likely", "Neutral", "Unlikely"], surveyId: 14 },
            { questionName: "What is the main reason for your rating?", questionType: QuestionType.Input, questionOption: [], surveyId: 14 },
            // Survey ID 15
            { questionName: "How satisfied are you with the product's performance?", questionType: QuestionType.MCQ, questionOption: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"], surveyId: 15 },
            { questionName: "Have you had any issues with the product?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 15 },
            // Survey ID 16
            { questionName: "What improvements would you like to see in our service?", questionType: QuestionType.Input, questionOption: [], surveyId: 16 },
            { questionName: "How would you rate the customer support service?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 16 },
            // Survey ID 17
            { questionName: "Are you satisfied with the training content provided?", questionType: QuestionType.MCQ, questionOption: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"], surveyId: 17 },
            { questionName: "What additional topics should be included in future trainings?", questionType: QuestionType.Input, questionOption: [], surveyId: 17 },
            // Survey ID 18
            { questionName: "How effective was the training in improving your skills?", questionType: QuestionType.MCQ, questionOption: ["Very Effective", "Effective", "Neutral", "Ineffective"], surveyId: 18 },
            { questionName: "Do you feel more confident in your role after the training?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 18 },
            // Survey ID 19
            { questionName: "How would you rate the clarity of our product documentation?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 19 },
            { questionName: "Do you have any suggestions for improving the documentation?", questionType: QuestionType.Input, questionOption: [], surveyId: 19 },
            // Survey ID 20
            { questionName: "What new features would enhance your experience with our product?", questionType: QuestionType.Input, questionOption: [], surveyId: 20 },
            { questionName: "How likely are you to continue using our product?", questionType: QuestionType.MCQ, questionOption: ["Very Likely", "Likely", "Neutral", "Unlikely"], surveyId: 20 },
            // Survey ID 21
            { questionName: "How would you rate the overall performance of our service?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 21 },
            { questionName: "What improvements would you suggest for our service?", questionType: QuestionType.Input, questionOption: [], surveyId: 21 },
            // Survey ID 22
            { questionName: "Do you find the product easy to integrate with other tools?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 22 },
            { questionName: "Rate the effectiveness of our customer service team.", questionType: QuestionType.MCQ, questionOption: ["Very Effective", "Effective", "Neutral", "Ineffective"], surveyId: 22 },
            // Survey ID 23
            { questionName: "How satisfied are you with the product's performance in real-world scenarios?", questionType: QuestionType.MCQ, questionOption: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"], surveyId: 23 },
            { questionName: "What additional features would you like to see?", questionType: QuestionType.Input, questionOption: [], surveyId: 23 },
            // Survey ID 24
            { questionName: "How do you rate the ease of use of our platform?", questionType: QuestionType.MCQ, questionOption: ["Very Easy", "Easy", "Neutral", "Difficult"], surveyId: 24 },
            { questionName: "Do you feel that our product meets your needs?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 24 },
            // Survey ID 25
            { questionName: "Rate the quality of our customer support.", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 25 },
            { questionName: "What changes would you recommend for our customer support?", questionType: QuestionType.Input, questionOption: [], surveyId: 25 },
            // Survey ID 26
            { questionName: "How would you rate the product's reliability?", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 26 },
            { questionName: "Have you encountered any issues with the product?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 26 },
            // Survey ID 27
            { questionName: "What features do you find most valuable?", questionType: QuestionType.Input, questionOption: [], surveyId: 27 },
            { questionName: "Rate the ease of getting started with our product.", questionType: QuestionType.MCQ, questionOption: ["Very Easy", "Easy", "Neutral", "Difficult"], surveyId: 27 },
            // Survey ID 28
            { questionName: "How satisfied are you with the current product updates?", questionType: QuestionType.MCQ, questionOption: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"], surveyId: 28 },
            { questionName: "Do you feel the product is priced fairly?", questionType: QuestionType.TrueFalse, questionOption: [], surveyId: 28 },
            // Survey ID 29
            { questionName: "What improvements would you suggest for our product?", questionType: QuestionType.Input, questionOption: [], surveyId: 29 },
            { questionName: "How likely are you to recommend our product to others?", questionType: QuestionType.MCQ, questionOption: ["Very Likely", "Likely", "Neutral", "Unlikely"], surveyId: 29 },
            // Survey ID 30
            { questionName: "How effective was our product in solving your problem?", questionType: QuestionType.MCQ, questionOption: ["Very Effective", "Effective", "Neutral", "Ineffective"], surveyId: 30 },
            { questionName: "Do you have any suggestions for improving the product?", questionType: QuestionType.Input, questionOption: [], surveyId: 30 },
            // Survey ID 31
            { questionName: "Rate your overall experience with our service.", questionType: QuestionType.MCQ, questionOption: ["Excellent", "Good", "Average", "Poor"], surveyId: 31 },
            { questionName: "What additional features would you like to see in future updates?", questionType: QuestionType.Input, questionOption: [], surveyId: 31 }
        ];
        return questions;
    });
}
// Usage example
createQuestions().then(questions => {
    console.log(questions);
});
