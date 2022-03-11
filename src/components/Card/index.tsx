import React, { ReactNode } from 'react'
import './style.scss'

interface Props {
  className?: string
  children: ReactNode
}

const Card = ({className, children }: Props): JSX.Element => {
  return (
    <div className='card-login grid-column-5-10'>
      <div className={`${className}`}>
         {children}
      </div>
    </div>
  )
}
export default Card
