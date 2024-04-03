export default interface ResponseCustom<T extends object = never> {
  data?: Partial<T>[]
  item?: Partial<T>
  message?: string
  error?: string & object
}
