import InquiryEmail from "@/components/emails/inquiryEmail";
import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      ownerName,
      ownerEmail,
      propertyTitle,
      propertyPrice,
      senderName,
      senderEmail,
      senderPhone,
      senderMessage,
    } = body;

    if (
      !ownerName ||
      !ownerEmail ||
      !propertyTitle ||
      !propertyPrice ||
      !senderName ||
      !senderEmail ||
      !senderPhone ||
      !senderMessage
    ) {
      return NextResponse.json(
        { error: "all fields are required" },
        { status: 400 },
      );
    }

    // send the email
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      // in dev mode, replace with the email used to sign up on Resend (free accounts can only send to the account owner).
      to: "your_email",
      subject: `property inquiry from ${senderName}`,
      react: InquiryEmail({ownerName,propertyTitle,propertyPrice,senderName,senderEmail,senderPhone,senderMessage})
    });

    return NextResponse.json({success:200})
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "failed to send email",
      },
      {
        status: 500,
      },
    );
  }
}
