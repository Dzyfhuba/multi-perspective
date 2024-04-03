import { PrismaClient } from '@prisma/client'

export class User {
  id: number

  name: string

  email: string

  city: string

  password: string

  role: string

  created_at: string | Date
  updated_at: string | Date
}

export function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[],
): Omit<User, Key> {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key as Key)),
  ) as Omit<User, Key>
}

export async function getEmails(): Promise<string[]> {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.users.groupBy({ by: 'email' })
    return users.map((e) => e.email)
  } catch (error) {
    console.error(`Error while checking email registration: ${error}`)
    throw error // Rethrow the error to be handled by the caller
  }
}
