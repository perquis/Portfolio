import { AboutMe } from "@/components";
import { CodeBlock, Section } from "@/shared/ui";
import { calculateYearsSince } from "@/shared/utils/calculateYearsSince";

import { SocialsList } from "./ui-socials-list";

export const HeroSection = () => {
  return (
    <Section className="items-start gap-5">
      <AboutMe />
      <SocialsList />

      <CodeBlock
        controls={[
          {
            icon: "Json",
            name: "about-me.json",
          },
        ]}
        snippets={[
          {
            code: `\`\`\`json {showLineNumbers}
{
  "level": "Mid/Regular 🔥",
  "experience": "${calculateYearsSince("10.09.2020 00:00")} years",
  "technologies": ["HTML", "CSS", "TypeScript", "Python", "C#"],
  "hobbies": ["Football", "Travels", "Animals"],
  "location": "Warsaw, Poland",
}`,
          },
        ]}
      />
    </Section>
  );
};
