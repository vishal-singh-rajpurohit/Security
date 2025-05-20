import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Contact } from "@/model/contact.modal";


export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        console.log("Starting");
        const { name, email, number, businessType, city, state, postcode, message } = await request.json();
        console.log("Starting 2");

        if (!name || !email || !number || !businessType || !city || !state || !postcode || !message) {
            console.log("failed 1");
            return NextResponse.json(
                {
                    success: false,
                    message: "All data required",
                },
                { status: 400 }
            );
        }

        const savedDetails = new Contact({
            name,
            email,
            number: Number(number),
            businessType,
            city,
            state,
            postCode: Number(postcode),
            message,
        });

        try {
            console.log("this part executed");
            await savedDetails.save();
            console.log("not showing");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error while saving details:", error.message);
            } else {
                console.error("Unknown error while saving details:", error);
            }

            return NextResponse.json(
                {
                    success: false,
                    message: "Server error while saving",
                },
                { status: 500 }
            );
        }

        if (!savedDetails) {
            console.log("Error in saving");
            return NextResponse.json(
                {
                    success: false,
                    message: "Internal server error",
                },
                { status: 400 }
            );
        }

        console.log("finishing");
        return NextResponse.json(
            {
                success: true,
                message: "Submitted successfully",
            },
            { status: 200 }
        );

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in contact API:", error.message);
        } else {
            console.error("Unknown error in contact API:", error);
        }

        return NextResponse.json(
            {
                success: false,
                message: "Error in submitting contact",
            },
            { status: 500 }
        );
    }

}