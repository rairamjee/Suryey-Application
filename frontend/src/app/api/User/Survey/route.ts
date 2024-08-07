import prisma from "@/utils/db";

export async function GET (req:Request){
    const {surveyId}=await req.json();

    const surveyExist =prisma.survey.findUnique({
        where:{surveyId}
    })

    if(!surveyExist)
    {
        return Request.json({
            message:"Survey Not Found",
            data:null
        },{
            status:
        }
    )
    }

    Response.json({
        message:"Survey Found",
        data:{
            id:surveyId,
            name:surveyExist.surveyName,
            

        }
    })
}