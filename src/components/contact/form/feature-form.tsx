import { useTranslations } from "next-intl";

import { Link } from "@/next/navigation";
import * as icons from "@/shared/icons/design";
import { Button, Form, Input, Paragraph, Regular, Section, StatusDot, Textarea } from "@/shared/ui";

export const ContactForm = () => {
  const t = useTranslations();

  return (
    <Section className="gap-10">
      <Section className="gap-5">
        <Section className="!flex-row justify-between">
          <Regular className="font-semibold">{t("contact.form.title")}</Regular>
          <Link href="/portfolio" className="text-sm font-medium flex gap-2">
            FAQ <icons.ArrowLineRight width={20} height={20} />
          </Link>
        </Section>

        <Paragraph>{t("contact.form.description")}</Paragraph>

        <Section className="!flex-row gap-3 items-center">
          <StatusDot status="online" />
          <Paragraph className="!text-sm">{t("home.hero.open_to_new_projects")}</Paragraph>
        </Section>
      </Section>

      <Form className="!gap-10">
        <Section className="gap-3">
          <Section className="!flex-row gap-3">
            <Input name="name" required placeholder="John" />
            <Input type="email" name="email" required placeholder="jdoe@gmail.com" />
          </Section>
          <Textarea name="message" required placeholder={t("contact.form.textarea_message")} />
        </Section>
        <Button type="submit" mode="simple" size="medium" variants="black" className="!justify-center">
          {t("contact.form.send")}
        </Button>
      </Form>
    </Section>
  );
};
