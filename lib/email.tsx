import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendRSVPConfirmationParams {
  to: string;
  guestName: string;
  attending: boolean;
  plusOneName?: string | null;
}

export async function sendRSVPConfirmation({
  to,
  guestName,
  attending,
  plusOneName,
}: SendRSVPConfirmationParams) {
  const subject = attending
    ? "RSVP Confirmed - Sarah & Michael's Wedding"
    : "RSVP Received - Sarah & Michael's Wedding";

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #faf9f7; font-family: 'Georgia', serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf9f7; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #a0654e; padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 400; letter-spacing: 2px;">
                      Sarah & Michael
                    </h1>
                    <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 14px; letter-spacing: 1px;">
                      ARE GETTING MARRIED
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="margin: 0 0 20px; color: #3d3630; font-size: 24px; font-weight: 400; text-align: center;">
                      Thank You for Your RSVP
                    </h2>
                    
                    <p style="margin: 0 0 20px; color: #524a42; font-size: 16px; line-height: 1.6; text-align: center;">
                      Dear ${guestName},
                    </p>
                    
                    <div style="background-color: #f0eeeb; border-radius: 8px; padding: 25px; margin: 20px 0; text-align: center;">
                      <p style="margin: 0; color: #7a7067; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                        Your Response
                      </p>
                      <p style="margin: 10px 0 0; color: ${attending ? "#a0654e" : "#7a7067"}; font-size: 20px; font-weight: 600;">
                        ${attending ? "Joyfully Accepts" : "Respectfully Declines"}
                      </p>
                      ${
                        attending && plusOneName
                          ? `<p style="margin: 15px 0 0; color: #524a42; font-size: 14px;">
                              Guest: ${plusOneName}
                            </p>`
                          : ""
                      }
                    </div>
                    
                    ${
                      attending
                        ? `
                    <div style="border-top: 1px solid #e5e2dd; margin: 30px 0; padding-top: 30px;">
                      <h3 style="margin: 0 0 15px; color: #3d3630; font-size: 18px; font-weight: 400; text-align: center;">
                        Event Details
                      </h3>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 10px 0; color: #7a7067; font-size: 14px;">Date:</td>
                          <td style="padding: 10px 0; color: #3d3630; font-size: 14px; text-align: right;">Saturday, June 15, 2026</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; color: #7a7067; font-size: 14px;">Time:</td>
                          <td style="padding: 10px 0; color: #3d3630; font-size: 14px; text-align: right;">4:00 PM</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; color: #7a7067; font-size: 14px;">Venue:</td>
                          <td style="padding: 10px 0; color: #3d3630; font-size: 14px; text-align: right;">The Grand Estate</td>
                        </tr>
                      </table>
                    </div>
                    `
                        : `
                    <p style="margin: 20px 0; color: #524a42; font-size: 16px; line-height: 1.6; text-align: center;">
                      We're sorry you won't be able to join us, but we appreciate you letting us know. You'll be missed!
                    </p>
                    `
                    }
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f0eeeb; padding: 30px; text-align: center;">
                    <p style="margin: 0; color: #7a7067; font-size: 14px;">
                      With love,
                    </p>
                    <p style="margin: 5px 0 0; color: #a0654e; font-size: 18px; font-style: italic;">
                      Sarah & Michael
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    // from: "Wedding RSVP <onboarding@resend.dev>",
    const { data, error } = await resend.emails.send({
      from: "Wedding RSVP <onboarding@resend.dev>",
      to: [to],
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(error.message);
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
