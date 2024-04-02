import styles from './select.module.css'
import { SelectHTMLAttributes } from 'react'

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  placeholder?: string
}

const Select = ({ name, id, className, label, children, placeholder, ...props }: Props) => {
  const identity = name || id

  return (
    <div className={styles.container}>
      <label htmlFor={identity}
        className={styles.label}
      >{label}</label>
      <select {...props}
        name={identity}
        id={identity}
        className={styles.select + (className ? ` ${className}` : '')}
      >
        {placeholder ? (
          <option value="">{placeholder}</option>
        ) : <></>}
        {children}
      </select>
    </div>
  )
}

export default Select