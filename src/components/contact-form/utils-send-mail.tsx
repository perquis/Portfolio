"use server";

import { render } from "@react-email/components";

import type { Schema } from "@/components/contact-form/feature-contact-form";
import ContactFormMessageMail from "@/emails/messages/contact-form";
import { transporter } from "@/libs/nodemailer";
import { capitalized } from "@/shared/utils";

export const sendMail = async (email: Schema) => {
  const { SMTP_GMAIL_EMAIL: to } = process.env;

  const html = await render(<ContactFormMessageMail email={email} />),
    subject = `${capitalized(email.name)} sent mail for you 📧!`;

  transporter.sendMail({ to, subject, html });
};
