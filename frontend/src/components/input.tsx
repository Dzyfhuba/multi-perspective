import { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

const Input = ({ name, id, className, label, ...props }: Props) => {
  const identity = name || id
  
  return (
    <div className={styles.container}>
      <label htmlFor={identity}
        className={styles.label}
      >{label}</label>
      <input {...props}
        id={identity}
        name={identity}
        className={styles.input + (className ? ` ${className}` : '')} 
      />
    </div>
  )
}

export default Input