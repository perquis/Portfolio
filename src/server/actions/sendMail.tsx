"use server";

import { render } from "@react-email/components";

import type { Schema } from "@/components";
import ContactFormMessageMail from "@/emails/messages/contact-form";
import { transporter } from "@/libs/nodemailer";
import { capitalized } from "@/shared/utils/capitalized";

export async function sendMail({ name, email, message, checked }: Schema) {
  if (!checked) {
    throw new Error("Please agree with the policy and privacy.");
  }

  transporter.sendMail({
    to: process.env.SMTP_GMAIL_EMAIL,
    subject: `${capitalized(name)} sent mail for you 📧!`,
    html: await render(<ContactFormMessageMail email={{ name, email, message }} />),
  });
}
