import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import { Contact } from "../../../model/contact.modal";

export async function POST(request) {
  try {
    await dbConnect();
    console.log("Database connected");

    const { name, email, number, businessType, city, state, postcode, message } = await request.json();

    if (!name || !email || !number || !businessType || !city || !state || !postcode || !message) {
      console.log("Validation failed: Missing required fields");
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
      await savedDetails.save();
      console.log("Contact saved successfully");
    } catch (error) {
      console.error("Error while saving details:", error.message || error);
      return NextResponse.json(
        {
          success: false,
          message: "Server error while saving",
        },
        { status: 500 }
      );
    }

    if (!savedDetails) {
      console.log("Saving contact returned invalid result");
      return NextResponse.json(
        {
          success: false,
          message: "Internal server error",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error.message || error);
    return NextResponse.json(
      {
        success: false,
        message: "Error in submitting contact",
      },
      { status: 500 }
    );
  }
}
