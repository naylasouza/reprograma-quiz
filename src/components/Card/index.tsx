import React, { CSSProperties, ReactNode } from 'react'
import './style.scss'

interface Props {
  style?: CSSProperties
  className?: string
  children: ReactNode
}

const Card = ({ style, className, children }: Props): JSX.Element => {
  return (
    <div className='card-login'>
      <div className={`${className}`}>
         {children}
      </div>
    </div>
  )
}
export default Card
