'use client'
import { HTMLAttributes } from "react"

const Client = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default Client