import { useTranslations } from "next-intl";

import { Code, Details, Paragraph, Regular, Section } from "@/shared/ui";

import { useItems } from "./utils-use-items";

export const WorkflowsList = () => {
  const items = useItems();
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("HOME_PROCESS_TITLE")}</Regular>
      <Paragraph>{t("HOME_PROCESS_DESCRIPTION")}</Paragraph>

      <Code
        code={`\`\`\`tsx
const items = await getItems();
render(<List items={items} />);`}
      />

      <Details items={items} />
    </Section>
  );
};
