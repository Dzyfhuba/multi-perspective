import styles from './button.module.css'
import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  square?: boolean
  primary?: boolean
}

const Button = ({ children, className, square, primary, ...props }: Props) => {

  const container = [
    {
      prop: square,
      className: styles.square
    },
    {
      prop: primary,
      className: styles.primary
    },
    {
      prop: className,
      className: className
    },
  ].filter(e => e.prop).map(e => ` ${e.className}`).join('')

  return (
    <button {...props} className={`${styles.container}${container}`}>
      {children}
    </button>
  )
}

export default Button