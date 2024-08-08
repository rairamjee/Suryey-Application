import prisma from "@/utils/db";

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body)
    const question = await prisma.question.create({
        data: body
    });


    return Response.json({
        message: "Questions created!",
        data: question
    }, {
        status: 200
    });

}

export async function GET(req: Request) {
    const { filter } = await req.json();
    const questions = await prisma.question.findMany({ where: filter });

    return Response.json({
        message: "Questions found!",
        data: questions
    }, {
        status: 200
    });
}


