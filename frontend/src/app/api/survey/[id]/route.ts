import prisma from "@/utils/db";

export async function GET(req: Request) {
    const { surveyId } = await req.json();

    const surveyExist = await prisma.survey.findUnique({
        where: { surveyId }
    })

    if (!surveyExist) {
        return Response.json({
            message: "Survey Not Found",
            data: null
        }, {
            status: 404
        }
        )
    }

    Response.json({
        message: "Survey Found",
        data: {
            id: surveyId,
            name: surveyExist.surveyName,
        }
    })
}