import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { fullName, workEmail, orgName, website, howHeard, message } = body;

  if (!fullName || !workEmail || !orgName || !website || !howHeard) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: `GlobalCodio Contact <${process.env.SENDER_EMAIL || 'info@globalcodio.ai'}>`,
      to: 'vineeth.kumar@medicodio.ai',
      replyTo: workEmail,
      subject: `New enquiry from ${fullName} — ${orgName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#1a1a1a">
          <h2 style="margin:0 0 24px;font-size:22px;color:#1950C6">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:160px">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee">${fullName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${workEmail}" style="color:#1950C6">${workEmail}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Organization</td><td style="padding:10px 0;border-bottom:1px solid #eee">${orgName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Website</td><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="${website}" style="color:#1950C6">${website}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">How they heard</td><td style="padding:10px 0;border-bottom:1px solid #eee">${howHeard}</td></tr>
            <tr><td style="padding:10px 0;font-weight:600;vertical-align:top">Message</td><td style="padding:10px 0;white-space:pre-wrap">${message || '—'}</td></tr>
          </table>
          <p style="margin-top:32px;font-size:12px;color:#888">Sent from globalcodio.ai contact form</p>
        </div>`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('[contact]', err.message);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
