declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_USER_ID: string;
      CHANNEL_ACCESS_TOKEN: string;
      CHANNEL_SECRET: string;
      DATABASE: string;
      DATABASE_PASSWORD: string;
      DATABASE_USERNAME: string;
    }
  }
}

export {};
