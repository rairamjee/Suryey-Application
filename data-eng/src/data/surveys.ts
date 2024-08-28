// Define the types
export type Survey = {
    surveyName: string;
    surveyDescription: string;
    startDate: Date;
    endDate: Date;
};

// Create dummy survey data with 25 surveys
export async function createSurveys(): Promise<Survey[]> {
    const surveys: Survey[] = [
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

    return surveys;
}

// Usage example
createSurveys().then(surveys => {
    console.log(surveys);
});
