"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/next/navigation";
import * as icons from "@/shared/icons/design";
import { Button, Form, Input, Paragraph, Regular, Section, StatusDot, Textarea } from "@/shared/ui";

export const ContactForm = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <Section className="gap-10">
      <Section className="gap-5">
        <Section className={clsx("!flex-row", { "justify-between": !isContactPage })}>
          <Regular
            className={clsx(
              isContactPage ? "font-bold" : "font-semibold",
              { "text-xl": isContactPage },
              { "!text-zinc-950 dark:!text-white": isContactPage },
            )}
          >
            {t("CONTACT_FORM_TITLE")}
          </Regular>
          {!isContactPage && (
            <Link href="/portfolio" className="flex gap-2 text-sm font-medium">
              FAQ <icons.ArrowLineRight width={20} height={20} />
            </Link>
          )}
        </Section>

        <Paragraph>{t("CONTACT_FORM_DESCRIPTION")}</Paragraph>

        <Section className="!flex-row items-center gap-3">
          <StatusDot status="online" />
          <Paragraph className="!text-sm">{t("HOME_HERO_OPEN_TO_NEW_PROJECTS")}</Paragraph>
        </Section>
      </Section>

      <Form className="!gap-10">
        <Section className="gap-3">
          <Section className="!flex-row gap-3">
            <Input name="name" required placeholder="John" />
            <Input type="email" name="email" required placeholder="jdoe@gmail.com" />
          </Section>
          <Textarea name="message" required placeholder={t("CONTACT_FORM_TEXTAREA_MESSAGE")} />
        </Section>
        <Button type="submit" mode="simple" size="medium" variants="black" className="!justify-center">
          {t("CONTACT_FORM_BUTTON_SEND")}
        </Button>

        <Regular>{t("CONTACT_FORM_TIME_TO_RESPONSE")}</Regular>
      </Form>
    </Section>
  );
};
