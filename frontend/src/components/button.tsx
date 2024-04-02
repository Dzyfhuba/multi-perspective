import styles from './button.module.css'
import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  square?: boolean
}

const Button = ({ children, className, square, ...props }: Props) => {
  return (
    <button {...props} className={`${styles.container}${square ? ` ${styles.square}` : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </button>
  )
}

export default Button