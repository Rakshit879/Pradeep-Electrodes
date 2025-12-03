import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type Payload = Record<string, string>;

async function getPayload(req: Request): Promise<Payload> {
  const ct = (req.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json')) {
    return (await req.json()) as Payload;
  }
  // parse form data
  try {
    const form = await req.formData();
    const out: Payload = {};
    form.forEach((v, k) => {
      out[k] = String(v);
    });
    return out;
  } catch (e) {
    return {};
  }
}

export async function POST(req: Request) {
  const data = await getPayload(req);

  const {
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    country = '',
    message = '',
  } = data;

  // Basic validation
  if (!firstName || !email || !phone || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }

  // Gmail SMTP configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'pradeepelectrodesofficial@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'yeqx ogtn mrwo hfph',
    },
  });

  const emailTo = process.env.EMAIL_TO || 'pradeepelectrodesofficial@gmail.com';
  const subject = `New Contact Form Submission from ${firstName} ${lastName}`;
  
  const html = `
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
          <h2>New Contact Form Submission - Pradeep Electrodes</h2>
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
          <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission

First Name: ${firstName}
Last Name: ${lastName || 'N/A'}
Email: ${email}
Phone: ${country || '+91'} ${phone}

Message:
${message}

---
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER || 'pradeepelectrodesofficial@gmail.com',
      to: emailTo,
      replyTo: email,
      subject,
      html,
      text,
    });

    return NextResponse.json({ 
      ok: true, 
      messageId: info.messageId,
      message: 'Your message has been sent successfully! We will contact you shortly.' 
    });
  } catch (err: any) {
    console.error('Email send error', err);
    return NextResponse.json({ 
      ok: false, 
      error: String(err?.message || 'Failed to send email') 
    }, { status: 500 });
  }
}

