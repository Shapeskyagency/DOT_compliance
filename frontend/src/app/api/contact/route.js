import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Get the request body (make sure the client sends this in JSON format)
    const { name, email, number, subject, message } = await req.json();

    // Create a transporter (using your SMTP credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Use Gmail service for simplicity, or adjust to your SMTP server
      host: process.env.SMTP_HOST,  // Define host in the environment variables
      port: 587,
      secure: false,  // TLS is not secure by default, but use 'true' for SSL
      auth: {
        user: process.env.SMTP_USER,  // Use the environment variable for the sender's email
        pass: process.env.SMTP_PASSWORD,  // Use the environment variable for the sender's email password
      },
    });

    // Email content
    const mailData = {
      from: process.env.SMTP_USER,  // Sender's email
      to: 'chandigarhdrycleaner@gmail.com',  // Recipient's email (adjust as needed)
    //   to: 'support@mydotcabinet.com',  // Recipient's email (adjust as needed)
      subject: `New Enquiry: ${subject}`,
      html: `
        <h2>New Enquiry from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailData);

    // Return a success response
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    // Return an error response
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
  }
}
