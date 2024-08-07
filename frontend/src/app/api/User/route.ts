import prisma from '@/utils/db';
import bcrypt from 'bcryptjs'


export async function POST(req: Request) {
  const { email, password, name, designation } = await req.json();

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return Response.json(
      {
        message: "User Already Exist",
        data: null,
      },
      {
        status: 409,
      }
    );
  }

  const hashedPassword =await bcrypt.hash(password,10);

  try{
    const user=await prisma.user.create({
      data:{
        email,
        name,
        password:hashedPassword,
        designation
      }
    })
    return Response.json({
      message:"User Credentials",
      data:user
    },{
      status:201
    })
  }
  catch(error){
    return Response.json({
      message:"Error during user credentials",
      data:null
    },{
      status:500
    })

  }
}
