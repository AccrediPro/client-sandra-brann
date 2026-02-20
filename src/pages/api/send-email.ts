import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json().catch(() => null);

    if (!body) {
        return new Response(JSON.stringify({ message: 'Invalid request body' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const { name, email, phone, message, company_fax } = body;

    // Honeypot check: silently reject bots
    if (company_fax) {
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({ message: 'Missing required fields: name, email, and message are required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return new Response(
            JSON.stringify({ message: 'Invalid email format' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const contactEmail = import.meta.env.CONTACT_EMAIL;
    if (!contactEmail) {
        console.error('CONTACT_EMAIL environment variable is not set');
        return new Response(
            JSON.stringify({ message: 'Server configuration error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        const { error } = await resend.emails.send({
            from: 'noreply@accredipro-websites.com',
            to: contactEmail,
            replyTo: email,
            subject: `New Contact Form Submission from ${safeName}`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2C5282; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2C5282; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #EAB308; margin-top: 10px; }
        .footer { font-size: 12px; color: #666; margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span> ${safeName}
            </div>
            <div class="field">
                <span class="label">Email:</span> <a href="mailto:${safeEmail}">${safeEmail}</a>
            </div>
            <div class="field">
                <span class="label">Phone:</span> ${safePhone}
            </div>
            <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">
                    ${safeMessage}
                </div>
            </div>
            <div class="footer">
                This email was sent from the Mariska Goebel website contact form.
            </div>
        </div>
    </div>
</body>
</html>`.trim(),
        });

        if (error) {
            console.error('Resend error:', error);
            return new Response(
                JSON.stringify({ message: 'Failed to send email' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ message: 'Failed to send email' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
