"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { usePathname } from "@/next/navigation";
import { useAlert } from "@/providers/alert/alert.provider";
import { sendMail } from "@/server/actions/sendMail";
import { useOpen } from "@/shared/hooks";
import { ArrowLink, Button, Form, Input, Paragraph, Regular, Section, Textarea } from "@/shared/ui";

const schema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email().max(64),
  message: z.string().min(10).max(256),
});

export type Schema = z.infer<typeof schema>;

export const ContactForm = () => {
  const t = useTranslations();
  const [loading, [open, close]] = useOpen();
  const { alert, setAlert } = useAlert();

  const pathname = usePathname();
  const root = pathname === "/contact";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((e) => {
    open();

    try {
      setAlert({
        status: "success",
        content: t("ALERT_SUCCESSFULLY"),
      });

      reset();
      sendMail(e);

      close();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setAlert({
        status: "error",
        content: t("ALERT_ERROR"),
      });

      close();
    }
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
          {!root && <ArrowLink href="/contact#faq">FAQ</ArrowLink>}
        </Section>

        <Paragraph>{t("CONTACT_FORM_DESCRIPTION")}</Paragraph>
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
        <Button
          type="submit"
          mode="simple"
          size="medium"
          variants="black"
          loading={loading}
          disabled={!!alert}
          className="!justify-center"
        >
          {t("CONTACT_FORM_BUTTON_SEND")}
        </Button>

        <Regular>{t("CONTACT_FORM_TIME_TO_RESPONSE")}</Regular>
      </Form>
    </Section>
  );
};
