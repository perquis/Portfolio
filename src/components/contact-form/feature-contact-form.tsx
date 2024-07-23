"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Link, usePathname } from "@/next/navigation";
import { sendMail } from "@/server/actions/sendMail";
import * as icons from "@/shared/icons/design";
import { Button, Form, Input, Paragraph, Regular, Section, StatusDot, Textarea } from "@/shared/ui";

const schema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email().max(64),
  message: z.string().min(10).max(256),
});

export type Schema = z.infer<typeof schema>;

export const ContactForm = () => {
  const t = useTranslations();

  const pathname = usePathname();
  const root = pathname === "/contact";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((e) => {
    sendMail(e);
  });

  return (
    <Section className="gap-10">
      <Section className="gap-5">
        <Section className={clsx("!flex-row", { "justify-between": !root })}>
          <Regular
            className={clsx(
              root ? "font-bold" : "font-semibold",
              { "text-xl": root },
              { "!text-zinc-950 dark:!text-white": root },
            )}
          >
            {t("CONTACT_FORM_TITLE")}
          </Regular>
          {!root && (
            <Link href="/contact#faq" className="flex gap-2 text-sm font-medium">
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

      <Form className="!gap-10" onSubmit={onSubmit}>
        <Section className="gap-3">
          <Section className="!flex-row gap-3">
            <Input
              placeholder="John"
              autoComplete="name"
              error={errors.name?.message}
              {...register("name", { required: true })}
            />
            <Input
              type="email"
              autoComplete="email"
              placeholder="jdoe@gmail.com"
              error={errors.email?.message}
              {...register("email", { required: true })}
            />
          </Section>
          <Textarea
            error={errors.message?.message}
            {...register("message", { required: true })}
            placeholder={t("CONTACT_FORM_TEXTAREA_MESSAGE")}
          />
        </Section>
        <Button type="submit" mode="simple" size="medium" variants="black" className="!justify-center">
          {t("CONTACT_FORM_BUTTON_SEND")}
        </Button>

        <Regular>{t("CONTACT_FORM_TIME_TO_RESPONSE")}</Regular>
      </Form>
    </Section>
  );
};
