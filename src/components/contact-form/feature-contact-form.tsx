"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ScheduleMeeting } from "@/components";
import { useAlert } from "@/providers/alert.provider";
import { sendMail } from "@/server/actions/sendMail";
import { useOpen } from "@/shared/hooks";
import { Button, Checkbox, Form, Header, Input, Regular, Section, Textarea } from "@/shared/ui";
import { usePathname } from "@/third-party/next-intl";

const schema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email().max(64),
  message: z.string().min(10).max(256),
  checked: z.boolean().refine((value) => value === true, {
    message: "Please agree with the policy and privacy.",
  }),
});

export type Schema = z.infer<typeof schema>;

export const ContactForm = () => {
  const t = useTranslations();
  const [loading, [open, close]] = useOpen();
  const { alert, setAlert } = useAlert();

  const pathname = usePathname();

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
      <Section className="items-start gap-5">
        <Header
          heading="CONTACT_FORM_TITLE"
          description="CONTACT_FORM_DESCRIPTION"
          pathname="/contact"
          link={{
            name: "FAQ",
            url: "/contact#faq",
          }}
        />

        {pathname !== "/" && <ScheduleMeeting />}
      </Section>

      <Form className="!gap-10" onSubmit={onSubmit}>
        <Section className="gap-3">
          <Section className="gap-3 sm:!flex-row">
            <Input
              placeholder="John Doe"
              autoComplete="name"
              labelText={t("CONTACT_FORM_INPUT_NAME")}
              id="name"
              error={errors.name?.message}
              {...register("name", { required: true })}
            />
            <Input
              type="email"
              autoComplete="email"
              placeholder="jdoe@gmail.com"
              labelText={t("CONTACT_FORM_INPUT_EMAIL")}
              id="email"
              error={errors.email?.message}
              {...register("email", { required: true })}
            />
          </Section>
          <Textarea
            labelText={t("CONTACT_FORM_INPUT_MESSAGE")}
            id="message"
            error={errors.message?.message}
            {...register("message", { required: true })}
            placeholder={t("CONTACT_FORM_TEXTAREA_MESSAGE")}
          />
          <label className="mt-2 flex items-start gap-3" htmlFor="checked">
            <Checkbox {...register("checked", { required: true })} required id="checked" />
            <Regular className="select-none !text-xs">{t("CONTACT_FORM_CHECKBOX_AGREE")}</Regular>
          </label>
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
