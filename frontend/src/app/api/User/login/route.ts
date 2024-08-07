import prisma from '@/utils/db';
import bcrypt from "bcryptjs"

import jwt from 'jsonwebtoken';

export  async function POST(req:Request){
    const {email, password}=await req.json();

    const existingUser= prisma.user.findUnique({
        where:{email}
    })

    if(!existingUser){
        return Response.json({
            message:"User  Not Fould",
            data:null
        },{
            status:
        })
    }

    const isPasswordMatch = await bcrypt.compare(password, existingUser.password)

    if(!isPasswordMatch){
        return Response.json({
            message:"Invalid password",
            data:null
        },{
            status:401
        })
    }

    const token=jwt.sign({id:existingUser.id , mail:existingUser.email , roles:existingUser.roles},process.env.JWT_SECRET as string,{expireIn:'2d'})


    return Response.json({
        message:"Successfully Signed In",
        data:{
            token:token,
            neme:existingUser.name,
            designation:existingUser.designation
        }
    },{
        status:200
    })
}