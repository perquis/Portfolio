declare global {
  namespace NodeJS {
    type Env = "SMTP_GMAIL_EMAIL" | "SMTP_GMAIL_PASSWORD" | "SITE_URL";

    type MappedEnv = {
      [K in Env]?: string;
    };

    interface ProcessEnv extends MappedEnv {
      NODE_ENV?: "development" | "production" | "test";
    }
  }
}

export {};
