import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function verifyEnvVars() {
  const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'QUOTE_EMAIL_RECIPIENT'];
  const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingEnvVars.length > 0) {
    console.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
    throw new Error('Missing required environment variables');
  }
}

// Create a nodemailer transport instance
function createTransport() {
  verifyEnvVars();
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
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
}

const transporter = createTransport();

export async function POST(request: Request) {
  // Verify SMTP connection on each request in production
  if (process.env.NODE_ENV === 'production') {
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (error) {
      console.error('SMTP connection verification failed:', error);
      return NextResponse.json(
        { error: 'Email service unavailable', details: error instanceof Error ? error.message : 'Unknown error' },
        { status: 503 }
      );
    }
  }

  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.QUOTE_EMAIL_RECIPIENT,
      subject: 'New Quote Request from adhesivewheelweight.com',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error: any) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json({ error: errorMessage, details: JSON.stringify(error) }, { status: 500 });
  }
}
