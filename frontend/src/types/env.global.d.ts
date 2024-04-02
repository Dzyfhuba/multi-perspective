declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string
      NEXT_PUBLIC_APP_NAME: string
    }
  }
}

export {}