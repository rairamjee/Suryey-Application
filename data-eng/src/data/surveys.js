"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSurveys = createSurveys;
// Create dummy survey data with 25 surveys
function createSurveys() {
    return __awaiter(this, void 0, void 0, function () {
        var surveys;
        return __generator(this, function (_a) {
            surveys = [
                { surveyName: "Employee Satisfaction Survey", surveyDescription: "A survey to gauge employee satisfaction levels.", startDate: new Date('2024-09-01'), endDate: new Date('2024-09-30') },
                { surveyName: "Customer Feedback Survey", surveyDescription: "A survey to collect feedback from our customers.", startDate: new Date('2024-10-01'), endDate: new Date('2024-10-31') },
                { surveyName: "Training Evaluation Survey", surveyDescription: "A survey to evaluate the effectiveness of recent training sessions.", startDate: new Date('2024-11-01'), endDate: new Date('2024-11-30') },
                { surveyName: "Product Development Feedback", surveyDescription: "Gathering feedback on new product developments.", startDate: new Date('2024-12-01'), endDate: new Date('2024-12-15') },
                { surveyName: "Employee Engagement Survey", surveyDescription: "Assessing employee engagement and morale.", startDate: new Date('2024-12-16'), endDate: new Date('2024-12-31') },
                { surveyName: "Annual Performance Review", surveyDescription: "Evaluating the annual performance of employees.", startDate: new Date('2024-01-01'), endDate: new Date('2024-01-31') },
                { surveyName: "New Hire Feedback", surveyDescription: "Collecting feedback from new hires about their onboarding experience.", startDate: new Date('2024-02-01'), endDate: new Date('2024-02-28') },
                { surveyName: "Product Usability Study", surveyDescription: "Studying the usability of our latest product.", startDate: new Date('2024-03-01'), endDate: new Date('2024-03-31') },
                { surveyName: "Customer Service Satisfaction", surveyDescription: "Measuring customer satisfaction with our service.", startDate: new Date('2024-04-01'), endDate: new Date('2024-04-30') },
                { surveyName: "Market Research Survey", surveyDescription: "Gathering insights on market trends and customer needs.", startDate: new Date('2024-05-01'), endDate: new Date('2024-05-31') },
                { surveyName: "Employee Wellness Survey", surveyDescription: "Assessing the wellness and health needs of employees.", startDate: new Date('2024-06-01'), endDate: new Date('2024-06-30') },
                { surveyName: "Technology Adoption Survey", surveyDescription: "Understanding the adoption of new technologies within the company.", startDate: new Date('2024-07-01'), endDate: new Date('2024-07-31') },
                { surveyName: "Leadership Feedback", surveyDescription: "Collecting feedback on leadership effectiveness.", startDate: new Date('2024-08-01'), endDate: new Date('2024-08-31') },
                { surveyName: "Employee Motivation Survey", surveyDescription: "Exploring factors that motivate employees.", startDate: new Date('2024-09-01'), endDate: new Date('2024-09-30') },
                { surveyName: "Client Satisfaction Survey", surveyDescription: "Evaluating client satisfaction with our services.", startDate: new Date('2024-10-01'), endDate: new Date('2024-10-31') },
                { surveyName: "Training Needs Assessment", surveyDescription: "Identifying training needs for employees.", startDate: new Date('2024-11-01'), endDate: new Date('2024-11-30') },
                { surveyName: "Product Improvement Suggestions", surveyDescription: "Gathering suggestions for improving our products.", startDate: new Date('2024-12-01'), endDate: new Date('2024-12-15') },
                { surveyName: "Employee Recognition Survey", surveyDescription: "Assessing the effectiveness of employee recognition programs.", startDate: new Date('2024-12-16'), endDate: new Date('2024-12-31') },
                { surveyName: "Annual Satisfaction Survey", surveyDescription: "A yearly survey to gauge overall satisfaction.", startDate: new Date('2024-01-01'), endDate: new Date('2024-01-31') },
                { surveyName: "Remote Work Experience Survey", surveyDescription: "Evaluating employee experiences with remote work.", startDate: new Date('2024-02-01'), endDate: new Date('2024-02-28') },
                { surveyName: "Customer Needs Assessment", surveyDescription: "Identifying customer needs and expectations.", startDate: new Date('2024-03-01'), endDate: new Date('2024-03-31') },
                { surveyName: "Service Quality Survey", surveyDescription: "Measuring the quality of our services.", startDate: new Date('2024-04-01'), endDate: new Date('2024-04-30') },
                { surveyName: "Employee Skill Assessment", surveyDescription: "Assessing the skills and competencies of employees.", startDate: new Date('2024-05-01'), endDate: new Date('2024-05-31') },
                { surveyName: "Innovation Feedback Survey", surveyDescription: "Gathering feedback on recent innovations.", startDate: new Date('2024-06-01'), endDate: new Date('2024-06-30') },
                { surveyName: "Customer Retention Survey", surveyDescription: "Understanding factors influencing customer retention.", startDate: new Date('2024-07-01'), endDate: new Date('2024-07-31') },
                { surveyName: "Employee Development Survey", surveyDescription: "Evaluating opportunities for employee development.", startDate: new Date('2024-08-01'), endDate: new Date('2024-08-31') },
                { surveyName: "Product Launch Feedback", surveyDescription: "Collecting feedback on a recent product launch.", startDate: new Date('2024-09-01'), endDate: new Date('2024-09-30') },
                { surveyName: "Client Engagement Survey", surveyDescription: "Measuring client engagement with our services.", startDate: new Date('2024-10-01'), endDate: new Date('2024-10-31') },
                { surveyName: "Employee Benefits Satisfaction", surveyDescription: "Assessing employee satisfaction with benefits packages.", startDate: new Date('2024-11-01'), endDate: new Date('2024-11-30') },
                { surveyName: "Customer Experience Survey", surveyDescription: "Gathering feedback on overall customer experience.", startDate: new Date('2024-12-01'), endDate: new Date('2024-12-15') },
                { surveyName: "Workplace Culture Survey", surveyDescription: "Evaluating the workplace culture and environment.", startDate: new Date('2024-12-16'), endDate: new Date('2024-12-31') }
            ];
            return [2 /*return*/, surveys];
        });
    });
}
// Usage example
createSurveys().then(function (surveys) {
    console.log(surveys);
});
