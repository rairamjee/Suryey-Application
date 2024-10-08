import prisma from "@/utils/db";

export async function GET(req: Request) {

    const surveys = await prisma.survey.findMany();
    return Response.json({
        message: `Surveys found!`,
        data: surveys
    })

}

export async function POST(req: Request) {
    const body = await req.json();
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);
    
    const survey = await prisma.survey.create({
        data: {...body, endDate}
    })

    console.log(survey);

    return Response.json({
        message: "Create surveys successfully!",
        data: survey.surveyId
    })
}