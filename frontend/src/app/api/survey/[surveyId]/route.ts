import prisma from "@/utils/db";

export async function GET(
  request: Request,
  { params }: { params: { surveyId: string } }
) {
 const surveyId: number = parseInt(params.surveyId as string);
  //   console.log(searchParams.get("surveyId"));
  //   return Response.json({ message: "ok" })
  try {
    console.log(surveyId)
    const questiosSurvey = await prisma.question.findMany({where:{surveyId}});

    console.log(questiosSurvey);

    return Response.json(
      {
        message: "Set of Questions of Survey",
        data: questiosSurvey,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "Error fetching data" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  //   const { surveyId } = await req.json();

  //   const surveyExist = await prisma.survey.findUnique({
  //     where: { surveyId },
  //   });

  //   if (!surveyExist) {
  //     return Response.json(
  //       {
  //         message: "Survey Not Found",
  //         data: null,
  //       },
  //       {
  //         status: 404,
  //       }
  //     );
  //   }

  //   Response.json({
  //     message: "Survey Found",
  //     data: {
  //       id: surveyId,
  //       name: surveyExist.surveyName,
  //     },
  //   });
}
