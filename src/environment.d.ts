declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_USER_ID: string;
      CHANNEL_ACCESS_TOKEN: string;
      CHANNEL_SECRET: string;
      DATABASE: string;
      PORT: string;
    }
  }
}

export {};
