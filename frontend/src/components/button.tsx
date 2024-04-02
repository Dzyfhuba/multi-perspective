import Link from 'next/link'
import styles from './button.module.css'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
  square?: boolean
  primary?: boolean
  small?: boolean
  outline?: boolean
  flip?: boolean
  href?: string
}

const Button = ({ children, href, className, square, primary, small, outline, flip, ...props }: Props) => {

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
      prop: small,
      className: styles.small
    },
    {
      prop: outline,
      className: styles.outline
    },
    {
      prop: flip,
      className: styles.flip
    },
    {
      prop: className,
      className: className
    },
  ].filter(e => e.prop).map(e => ` ${e.className}`).join('')

  if (href) {
    return (
      <Link {...props}
        className={`${styles.container}${container}`}
        href={href}
      >
        {children}
      </Link>
    )
  }

  return (
    <button {...props}
      className={`${styles.container}${container}`}
    >
      {children}
    </button>
  )
}

export default Button