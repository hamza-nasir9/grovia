// app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject = 'New Contact', message } = body;

    // Debug: env variables check karo
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_USER:', process.env.SMTP_USER ? 'present' : 'MISSING');
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'present' : 'MISSING');

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP credentials missing in .env.local');
    }

    // Validation
    if (!name || !email || !message) {
      return Response.json({ success: false, message: 'Required fields missing' }, { status: 400 });
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // 465 ke liye true zaroori
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Optional: Connection verify (debug ke liye)
    await transporter.verify();
    console.log('SMTP connection verified!');

    // Send email
    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
    //   cc: email,
      subject: `${subject} from ${name}`,
      text: message,
      html: `
        <div style="font-family: Arial; max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9;">
          <h2 style="color: #10b981;">New Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <p style="margin-top: 30px; color: #666;">Sent from your website</p>
        </div>
      `,
    });

    console.log('Email sent:', info.messageId);

    return Response.json({ success: true, message: 'Email sent!' });

  } catch (error) {
    console.error('Email error:', error.message);
    return Response.json(
      { success: false, message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}