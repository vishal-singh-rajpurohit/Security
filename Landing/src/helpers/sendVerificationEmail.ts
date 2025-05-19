import { resend } from "@/lib/resend";
import { VerificationEmail } from "../../emails/VerificactionEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { emit } from "process";


export default async function sendVerificationEmail(
    email: string,
    username: string,
    otp: string
): Promise<ApiResponse>{
    try {

        await resend.emails.send({
            from: process.env.EMAIL_ADDRESSS! || "",
            to: email,
            subject: "Verification Code",
            react: VerificationEmail({userName: username, otp}) 
        })
        
        return {success: true, message: "verificatio email sent successfully"}
    } catch (error) {
        console.error("Error sending verification email");
        return {success: false, message: "Failed to send verificatio email"}
    }
}