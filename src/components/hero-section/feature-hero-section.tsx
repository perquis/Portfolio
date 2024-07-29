import { AboutMe } from "@/components";
import { CodeBlock, Section } from "@/shared/ui";

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
  "location": "Warsaw, Poland",
  "technologies": ["HTML", "CSS", "TypeScript", "Python", "C#"],
  "hobbies": ["Football", "Travels", "Animals"],
  "experience": "5 years"
}`,
          },
        ]}
      />
    </Section>
  );
};
