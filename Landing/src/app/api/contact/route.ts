import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Contact } from "@/model/contact.modal";


export async function POST(request: NextRequest, response: NextResponse) {
    try {
        await dbConnect();

        console.log("Starting")
        const { name, email, number, businessType, city, state, postcode, message } = await request.json();
        console.log("Starting 2")
        if (!name || !email || !number || !businessType || !city || !state || !postcode || !message) {
            console.log("failed 1")
            return NextResponse.json(
                {
                    success: false,
                    message: "all data required"
                },
                {
                    status: 400
                }
            );
        }

        console.log("Starting 3: ",  name, email, number, businessType, city, state, postcode, message)    
        const savedDetails = new Contact({
            name,
            email,
            number: Number(number),
            businessType,
            city,
            state,
            postCode: Number(postcode),
            message
        })
        try {
            console.log("this part executed")    
            await savedDetails.save();
            console.log("not showing")    
        } catch (error: any) {
            console.error("Error while saving details:", error);
            return NextResponse.json(
                {
                    success: false,
                    message: "Server error while saving",
                    error: error.message  // optional: expose error for easier frontend debugging
                },
                { status: 500 }
            );
        }
        console.log("not showing")    
        if (!savedDetails) {
            console.log("Error in saving")
            return NextResponse.json(
                {
                    success: false,
                    message: "internal server error"
                },
                {
                    status: 400
                }
            );
        }
        
        console.log("finishing")
        return NextResponse.json({
            success: true,
            message: "submited successfully"
        }, {
            status: 200
        })

    } catch (error: any) {
        // console.log("Error in contact Api: ", error);
        return NextResponse.json(
            {
                success: false,
                message: "Error in submit contact"
            },
            {
                status: 500
            }
        );
    }
}