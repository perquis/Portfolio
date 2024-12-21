import { ClientContactForm } from "./ui-client-contact-form";

export const ContactForm = () => {
  if (process.env.NEXT_PUBLIC_CONTACT_FORM === "true") return null;

  return <ClientContactForm />;
};
