import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user.model";
// Removed redundant import of Credentials

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials: any): Promise<any> {
                await dbConnect();
                try {
                    const user = await User.findOne({
                        $or: [
                            {
                                email: credentials.identifier.email
                            },
                            {
                                username: credentials.identifier.username
                            }
                        ]
                    })

                    if (!user) {
                        throw new Error("no user found with this email");
                    }

                    if (!user.isVerified) {
                        throw new Error("please verify your account first before login");
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.identifier.password, user.password);

                    if (!isPasswordCorrect) {
                        throw new Error("Incorrect password, check the password and try again");
                    } else {
                        return user
                    }

                } catch (error: any) {
                    console.log("Error while connecting db to next auth")
                    throw new Error(error)
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user){
                token._id = user._id?.toString();
                token.isVerified = user.isVerified;
                token.isAccptingMessages = user.isAccptingMessages;
                token.username = user.username;
            }

            return token
        },
        async session({ session, token }) {
            if(token){
                session.user._id = token._id;
                session.user.isVerified = token.isVerified;
                session.user.isAccptingMessages = token.isAccptingMessages;
                session.user.username = token.username;
            }
            return session
        }
    },
    pages: {
        // NExt auth will automatically design the page
        signIn: '/sign-in'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}