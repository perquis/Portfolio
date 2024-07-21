import { Logo, Regular, Section } from "@/shared/ui";

export default function Footer() {
  return (
    <Section className="!flex-row justify-between items-start">
      <Logo />
      <Regular className="!text-sm">Wszystkie prawa zastrzeżone © 2024</Regular>
    </Section>
  );
}
