import prisma from '@/utils/db';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    const { email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (!existingUser) {
        return new Response(JSON.stringify({
            message: "User Not Found",
            data: null
        }), {
            status: 404
        });
    }

    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordMatch) {
        return new Response(JSON.stringify({
            message: "Invalid password",
            data: null
        }), {
            status: 401
        });
    }

    const token = jwt.sign(
        { id: existingUser.id, email: existingUser.email, roles: existingUser.roles },
        process.env.JWT_SECRET as string,
        { expiresIn: '2d' }
    );

    return new Response(JSON.stringify({
        message: "Successfully Signed In",
        data: {
            token: token,
            name: existingUser.name,
            designation: existingUser.designation
        }
    }), {
        status: 200
    });
}
