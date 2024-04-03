declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string
      NEXT_PUBLIC_APP_NAME: string

      COMPANY_NAME: string
      NEXT_PUBLIC_COMPANY_NAME: string

      NEXT_PUBLIC_API_URL: string
    }
  }
}

export {}