export function extractToken(token: string): string {
  return token.replace('Bearer ', '')
}

export function excludeProperty<T extends object, K extends keyof T>(
  obj: T,
  property: K,
): Omit<T, K> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [property]: _, ...rest } = obj
  return rest
}
