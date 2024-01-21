import React from 'react'

export const H1 = ({className, ...props}) => {
  return (
    <h1
        className={cn('text-4xl font-extrabold tracking-tighter lg:text-5xl', className)}
        {...props}
    />
  )
}
