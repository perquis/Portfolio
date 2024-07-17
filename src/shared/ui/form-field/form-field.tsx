import Section from "@/shared/ui/section/section";

type IFormField = { children?: React.ReactNode };

export default function FormField({ children }: IFormField) {
  return <Section className="!flex-row gap-3 w-full">{children}</Section>;
}
