import prisma from "@/utils/db";

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body)
    const response = await prisma.respone.create({
        data: body
    });


    return Response.json({
        message: "Response Stored!",
        data: response
    }, {
        status: 200
    });

}