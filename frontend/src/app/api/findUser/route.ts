import { PrismaClient } from "@prisma/client";
import prisma from "@/utils/db";

export async function GET(req: Request) {
  const { userId, surveyId } = await req.json();
  console.log("UserId:", userId, "surveyId:", surveyId);

  try {
    const response = await prisma.respone.create({
      data: {
        surveyId,
        userId,
      },
    });
    return Response.json(
      {
        message: "Response Added",
        data: response,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Error during user credentials", data: null },
      {
        status: 500,
      }
    );
  }
}
