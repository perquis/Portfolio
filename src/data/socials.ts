const socials = [
  {
    name: "GitHub",
    url: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL!,
  },
  {
    name: "LinkedIn",
    url: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL!,
  },
  {
    name: "X",
    url: process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL!,
  },
] as const;

export default socials;
