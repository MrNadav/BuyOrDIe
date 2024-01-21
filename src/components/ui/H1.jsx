import React from 'react'
import {cn} from '../../lib/utils'
export const H1 = ({className, ...props}) => {
  return (
    <h1
        className={cn('text-4xl font-extrabold tracking-tighter lg:text-5xl text-red-lite', className)}
        {...props}
    />
  )
}
