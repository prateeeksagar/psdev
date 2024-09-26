
import {  NextApiResponse } from 'next';
import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server';


type ResponseData = {
  message: string
  success: boolean
}

export async function POST(req: NextRequest) {
  
  if (req.method === 'POST') {
  const {email} = await req.json();

  console.log("in the handler",email)

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Example for Gmail. Replace based on your email provider.
    port: 587, 
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
  });

  try {
    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_TO, // Sender address
      to: process.env.EMAIL_TO, // List of recipients
      subject: "RECRUITER FROM PORTFOLIO ", // Subject line
      text: "Recruiter wants to connect me", // Plain text body
      html: `<p>Hi, ${email} wants to connect prateek</p>`, // HTML body
    });

    console.log(info)

    // Respond with success message
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: 'Email failed to send' });
  }
} else {
  console.log("in the else part")
}
}

