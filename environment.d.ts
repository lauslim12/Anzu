declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE: string;
      DATABASE_PASSWORD: string;
    }
  }
}

export {};
