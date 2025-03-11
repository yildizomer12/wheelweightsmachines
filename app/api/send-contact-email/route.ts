import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  pool: true, // Use pooled connections
  maxConnections: 5, // Maximum number of connections to make
  maxMessages: Infinity, // Maximum number of messages to send using a connection
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, country, requirements } = body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'omer.yildiz@yilsa.com.tr',
      cc: ['info@yilsa.com.tr', 'yildiz@yilsa.com.tr'],
      subject: 'New Contact Request from wheelweightsmachines.com',
      text: `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\nCountry: ${country}\nMessage: ${requirements}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
