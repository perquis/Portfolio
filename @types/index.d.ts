declare global {
  namespace NodeJS {
    type Env =
      | "SMTP_GMAIL_EMAIL"
      | "SMTP_GMAIL_PASSWORD"
      | "VERCEL_URL"
      | "NEXT_PUBLIC_CALCOM_LINK"
      | "NEXT_PUBLIC_CALCOM_NAMESPACE";

    type MappedEnv = {
      [K in Env]?: string;
    };

    interface ProcessEnv extends MappedEnv {
      NODE_ENV?: "development" | "production" | "test";
    }
  }
}

export {};
