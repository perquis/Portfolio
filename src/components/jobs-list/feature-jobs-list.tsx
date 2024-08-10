import { socials } from "@/data";
import { Header, Section } from "@/shared/ui";

import { items } from "./data-items";
import { List } from "./ui-list";

export const JobsList = () => {
  const link = socials.find((social) => social.name === "LinkedIn")!;

  return (
    <Section className="gap-5">
      <Header
        heading="HOME_EXPERIENCES_TITLE"
        description="HOME_EXPERIENCES_DESCRIPTION"
        link={link}
        pathname="/blog"
      />

      <List items={items} />
    </Section>
  );
};
