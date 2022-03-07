import React from 'react'
import './styles.scss'

interface Props {
  text: string
  disabled?: boolean
  className?: string
}

const Button = ({
  text,
  disabled, 
  className
}: Props): JSX.Element => (
  <button className={`button ${className}`}>
    {text}
  </button>
)

export default(Button)
