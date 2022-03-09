import React, { MouseEventHandler } from 'react'
import './styles.scss'

interface Props {
  text: string
  disabled?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
 
}

const Button = ({
  text,
  disabled, 
  className,
  onClick
}: Props): JSX.Element => (
  <button className={`button ${className}`}  onClick={onClick}>
    {text}
  </button>
)

export default(Button)
