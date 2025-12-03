import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'priyeshsingh571@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'nugd ymrg juho efef',
  },
});

export async function sendContactEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country?: string;
  message: string;
}) {
  const { firstName, lastName, email, phone, country, message } = formData;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #FCD34D; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .header h2 { margin: 0; color: #000; }
        .content { background-color: #f5f5f5; padding: 20px; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #000; margin-bottom: 5px; }
        .field-value { color: #666; }
        .footer { margin-top: 20px; font-size: 12px; color: #999; border-top: 1px solid #ddd; padding-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">First Name:</div>
            <div class="field-value">${firstName}</div>
          </div>

          <div class="field">
            <div class="field-label">Last Name:</div>
            <div class="field-value">${lastName || 'N/A'}</div>
          </div>

          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value"><a href="mailto:${email}">${email}</a></div>
          </div>

          <div class="field">
            <div class="field-label">Phone:</div>
            <div class="field-value">${country || '+91'} ${phone}</div>
          </div>

          <div class="field">
            <div class="field-label">Message:</div>
            <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>

        <div class="footer">
          <p>This email was sent from the Pradeep Electrodes website contact form.</p>
          <p>Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission

First Name: ${firstName}
Last Name: ${lastName || 'N/A'}
Email: ${email}
Phone: ${country || '+91'} ${phone}

Message:
${message}

---
Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'priyeshsingh571@gmail.com',
      to: process.env.EMAIL_USER || 'priyeshsingh571@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: textContent,
      html: htmlContent,
      replyTo: email,
    });

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
