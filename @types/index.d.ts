declare global {
  namespace NodeJS {
    type Env =
      | "SMTP_GMAIL_EMAIL"
      | "SMTP_GMAIL_PASSWORD"
      | "VERCEL_URL"
      | "NEXT_PUBLIC_CALCOM_LINK"
      | "NEXT_PUBLIC_CALCOM_NAMESPACE"
      | "GOOGLE_FORM_URL"
      | "GITHUB_PROFILE_URL"
      | "LINKEDIN_PROFILE_URL"
      | "TWITTER_PROFILE_URL"
      | "NEXT_PUBLIC_DISABLE_CONTACT_FORM";

    type MappedEnv = {
      [K in Env]?: string;
    };

    interface ProcessEnv extends MappedEnv {
      NODE_ENV?: "development" | "production" | "test";
    }
  }
}

export {};
