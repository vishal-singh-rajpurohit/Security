import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/model/user.model";
import bcrypt from 'bcryptjs'
import sendVerificationEmail from "@/helpers/sendVerificationEmail";

export async function POST(request: NextRequest, response: NextResponse) {
    await dbConnect();
    try {
        const { username, email, password } = await request.json();

        if (!username || !email || !password) {
            console.log("All fields required: ");
            return NextResponse.json(
                {
                    success: false,
                    message: "Error all fields required"
                },
                {
                    status: 400
                }
            )
        }

        const isAlreadyExistsAndVerified = await User.findOne({
            username: username,
            isVerified: true
        });

        if (isAlreadyExistsAndVerified) {
            console.log("a user already exists with this username: ");
            return NextResponse.json(
                {
                    success: false,
                    message: "Error: user already exists with this username"
                },
                {
                    status: 400
                }
            )
        }

        const isEmailUsed = await User.findOne({
            email: email
        });
        let verifyCode;

        if (isEmailUsed) {
            if (isEmailUsed.isVerified) {
                console.log("An user already exists with this email: ");
                return NextResponse.json(
                    {
                        success: false,
                        message: "Error: An user already exists with this email"
                    },
                    {
                        status: 400
                    }
                )
            } else {
                verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

                const hashPass = await bcrypt.hash(password, 10);
                const expiryDate = new Date()
                expiryDate.setHours(expiryDate.getHours() + 1);

                isEmailUsed.password = hashPass;
                isEmailUsed.verifyCodeExpiry = expiryDate;
                isEmailUsed.verifyCode = verifyCode;

                await isEmailUsed.save();
            }
        } else {

            verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

            const hashPass = await bcrypt.hash(password, 10);
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1);


            const newUser = new User({
                username: username,
                email: email,
                password: hashPass,
                verifyCode: verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                isAccptingMessage: true,
                messages: []
            })

            await newUser.save();
        }

        // Send verification email

        const emailResp = await sendVerificationEmail(email, username, verifyCode);

        if (!emailResp) {
            console.error("error in sending verification email");

            return NextResponse.json(
                {
                    success: false,
                    message: "error in sending verification email"
                },
                {
                    status: 500
                }
            )
        }

        return NextResponse.json(
            {
                success: true,
                message: "User registered successfully, Please verify your email"
            },
            {
                status: 200
            }
        )

    } catch (error) {
        console.error("error in signup email")
        return NextResponse.json({
            success: false,
            message: "Error regisering user"
        },
            {
                status: 500
            })
    }
}