/* eslint-disable @typescript-eslint/no-unused-vars */
export function excludeProperty<T, K extends keyof T>(
  arr: T[],
  prop: K,
): Omit<T, K>[] {
  return arr.map(({ [prop]: _, ...rest }) => rest)
}
