import Section from "@/shared/ui/section/section";

type TFormField = { children?: React.ReactNode };

export default function FormField({ children }: TFormField) {
  return <Section className="w-full !flex-row gap-3">{children}</Section>;
}
