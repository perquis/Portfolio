"use server";

import type { Schema } from "@/components";
import { transporter } from "@/services/nodemailer";
import { capitalized } from "@/shared/utils/capitalized";

export async function sendMail({ name, email, message, checked }: Schema) {
  if (!checked) {
    throw new Error("Please agree with the policy and privacy.");
  }

  transporter.sendMail({
    to: process.env.SMTP_GMAIL_EMAIL,
    subject: `${capitalized(name)} sent mail for you 📧!`,
    html: /* html */ `
      <div style="max-width: 640px; margin: auto 0;">
        <h1 style="font-size: 20px">Hi Damian! 🖐️</h1>
      
        <p>
          I sent you a mail from your website.
          <br />Please check it out as soon as possible. You can find my message below:
          <br />
          <br />
          ${message}
        </p>

        <p>
          <strong>Best regards,</strong>
          <br />
          ${name}, <a href="mailto:${email}">${email}</a>
        </p>
      </div>
    `,
  });
}
