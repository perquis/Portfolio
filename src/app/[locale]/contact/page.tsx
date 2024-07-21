import { ContactForm } from "@/components/contact";
import { Layout } from "@/shared/ui";

const components = [ContactForm];

export default function Contact() {
  return <Layout components={components} />;
}
