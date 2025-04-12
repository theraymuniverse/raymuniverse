import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, budget, service } = await request.json();

  console.log('Sending email with data:', { name, email, message, budget, service });

  try {
    const data = await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: ['theraymuniverse@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Message:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${service}</p>

      `,
    });

    console.log('Resend API response:', data);

    return Response.json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    return Response.json({ message: 'Error sending email', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
