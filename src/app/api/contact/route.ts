import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message, budget, service } = await request.json();

  console.log('Sending email with data:', { name, email, message, budget, service });

  // Create a transporter using Zoho SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465, // use 587 for TLS or 465 for SSL
    secure: true, // true for port 465, false for 587
    auth: {
      user: process.env.ZOHO_EMAIL, // your Zoho email address
      pass: process.env.ZOHO_APP_PASSWORD, // use Zoho App Password, not regular password
    },
  });

  try {
    const mailOptions = {
      from: `"Contact Form" <${process.env.ZOHO_EMAIL}>`,
      to: ' contact@theraymuniverse.com', // your receiving email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return new Response(JSON.stringify({ message: 'Email sent successfully', info }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        message: 'Error sending email',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}