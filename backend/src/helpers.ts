export function extractToken(token: string): string {
  return token.replace('Bearer ', '')
}
