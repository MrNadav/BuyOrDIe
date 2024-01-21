import React from 'react'
import { H1 } from './ui/H1'
import { exmp } from '../data/exp'

export const Expenses = () => {
  return (

    <main>
      <div className='flex flex-col justify-center p-6 text-center'>
        <H1>Expenses</H1>

        <input type='text' placeholder='Seatch Expenses' className='w-96 p-2 m-2 mx-auto mt-8 text-gray-700 bg-gray-200 rounded-xl'/>
      </div>
      {exmp?.map((expense) => (
        <div key={expense.id}>
            <h3>{expense.title}</h3>
            <p>{expense.amount}</p>
            {/* <p>{expense.date}</p> */}
        </div>
    ))}
    </main>
  )
}
